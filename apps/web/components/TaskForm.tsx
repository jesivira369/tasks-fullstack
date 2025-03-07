"use client";

import { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Task } from "@repo/types";
import api from "../lib/api";

const schema = yup.object().shape({
    title: yup.string().required("El título es obligatorio"),
    description: yup.string().required("La descripción es obligatoria"),
});

interface TaskFormProps {
    open: boolean;
    onClose: () => void;
    task?: Task;
    onSave: () => void;
}

export default function TaskForm({ open, onClose, task, onSave }: TaskFormProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (task) reset(task);
    }, [task, reset]);

    const onSubmit = async (data: any) => {
        try {
            if (task) {
                await api.patch(`/tasks/${task.id}`, data);
            } else {
                await api.post("/tasks", data);
            }
            onSave();
            onClose();
        } catch (error) {
            console.error("Error guardando la tarea", error);
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ width: 400, padding: 4, backgroundColor: "white", margin: "auto", mt: 10 }}>
                <Typography variant="h6">{task ? "Editar Tarea" : "Nueva Tarea"}</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth label="Título" {...register("title")} error={!!errors.title} helperText={errors.title?.message} sx={{ mt: 2 }} />
                    <TextField fullWidth label="Descripción" {...register("description")} error={!!errors.description} helperText={errors.description?.message} sx={{ mt: 2 }} />
                    <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
                        {task ? "Actualizar" : "Agregar"}
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
