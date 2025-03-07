import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Task } from "@repo/types";
import api from "../lib/api";
import { useEffect } from "react";

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
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {task ? "Editar Tarea" : "Nueva Tarea"}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    {...register("title")}
                    label="Título"
                    fullWidth
                    margin="normal"
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />
                <TextField
                    {...register("description")}
                    label="Descripción"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancelar</Button>
                <Button onClick={handleSubmit(onSubmit)} variant="contained">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
}
