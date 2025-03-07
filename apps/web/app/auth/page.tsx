"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../lib/api";
import Cookies from "js-cookie";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Stack,
    FormHelperText,
    CircularProgress,
    Link
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function AuthPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnTo = searchParams.get("returnTo") || "/dashboard";

    const [isLogin, setIsLogin] = useState(true);
    const [invalidCredentials, setInvalidCredentials] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            if (isLogin) {
                const res = await api.post("/auth/login", data);
                return res.data;
            } else {
                return api.post("/auth/register", data);
            }
        },
        onSuccess: (data) => {
            if (isLogin) {
                Cookies.set("token", data.accessToken, { expires: 1, secure: true });
                toast.success("Inicio de sesión exitoso");
                router.push(returnTo);
            } else {
                toast.success("Registro exitoso, inicia sesión");
                setIsLogin(true);
            }
        },
        onError: (error: any) => {
            if (error.response?.status === 401) {
                setInvalidCredentials(error.response?.data?.message || "Credenciales inválidas");
            } else {
                toast.error(error.response?.data?.message || "Error en la autenticación");
            }
        },
    });

    const onSubmit = (data: any) => {
        setInvalidCredentials(null);
        mutation.mutate(data);
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Paper elevation={6} sx={{ padding: 4, textAlign: "center", width: "100%", borderRadius: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {isLogin ? "Iniciar sesión" : "Registrarse"}
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
                    <Stack spacing={2}>
                        <TextField
                            {...register("email")}
                            autoFocus
                            error={Boolean(errors?.email)}
                            fullWidth
                            helperText={errors?.email?.message}
                            label="Email"
                            autoComplete="username"
                        />
                        <TextField
                            {...register("password")}
                            error={Boolean(errors?.password)}
                            fullWidth
                            helperText={errors?.password?.message}
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                        />

                        {invalidCredentials && (
                            <FormHelperText error>{invalidCredentials}</FormHelperText>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <CircularProgress size={24} /> : isLogin ? "Iniciar sesión" : "Registrarse"}
                        </Button>
                    </Stack>
                </Box>

                <Typography variant="body2" sx={{ mt: 2 }}>
                    {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                    <Link component="button" onClick={() => setIsLogin(!isLogin)} sx={{ cursor: "pointer" }}>
                        {isLogin ? "Regístrate" : "Inicia sesión"}
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}
