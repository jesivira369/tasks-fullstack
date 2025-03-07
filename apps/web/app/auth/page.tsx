"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import api from "../../lib/api";
import Cookies from "js-cookie";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    CircularProgress,
    Link,
} from "@mui/material";

const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            if (isLogin) {
                const res = await api.post("/auth/login", data);
                const token = res.data.accessToken;

                if (!token) throw new Error("Error en autenticación");

                Cookies.set("token", token, { expires: 1, secure: true });

                router.push("/dashboard");
            } else {
                await api.post("/auth/register", data);
                alert("Registro exitoso, ahora inicia sesión");
                setIsLogin(true);
            }
        } catch (error: any) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Paper elevation={6} sx={{ padding: 4, textAlign: "center", width: "100%", borderRadius: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {isLogin ? "Iniciar sesión" : "Registrarse"}
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                    <TextField
                        fullWidth
                        label="Contraseña"
                        type="password"
                        margin="normal"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : isLogin ? "Iniciar sesión" : "Registrarse"}
                    </Button>
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
