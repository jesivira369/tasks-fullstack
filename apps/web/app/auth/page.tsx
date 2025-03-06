"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import api from "../../lib/api";

const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo requerido"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any) => {
        try {
            if (isLogin) {
                const res = await signIn("credentials", {
                    ...data,
                    redirect: false,
                });

                if (res?.error) throw new Error(res.error);
                router.push("/dashboard");
            } else {
                await api.post("/auth/register", data);
                alert("Registro exitoso, ahora inicia sesión");
                setIsLogin(true);
            }
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {isLogin ? "Iniciar sesión" : "Registrarse"}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input {...register("email")} type="email" className="w-full p-2 border rounded" />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input {...register("password")} type="password" className="w-full p-2 border rounded" />
                        <p className="text-red-500 text-sm">{errors.password?.message}</p>
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded">
                        {isLogin ? "Iniciar sesión" : "Registrarse"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                    <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Regístrate" : "Inicia sesión"}
                    </span>
                </p>
            </div>
        </div>
    );
}
