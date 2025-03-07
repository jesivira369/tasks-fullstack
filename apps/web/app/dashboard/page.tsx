"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Container, Typography, CircularProgress, Button } from "@mui/material";
import TaskList from "../../components/TasksList";
import TaskForm from "../../components/TaskForm";
import api from "../../lib/api";
import { Task } from "@repo/types";

export default function Dashboard() {
    const queryClient = useQueryClient();
    const [selectedTask, setSelectedTask] = useState<Task>();
    const [openForm, setOpenForm] = useState(false);

    const { data: tasks, isLoading, error } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await api.get<Task[]>("/tasks");
            return res.data;
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (taskId: string) => api.delete(`/tasks/${taskId}`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error al cargar las tareas</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Mis Tareas</Typography>

            <Button variant="contained" onClick={() => setOpenForm(true)} sx={{ mb: 2 }}>
                Agregar Tarea
            </Button>

            <TaskList tasks={tasks || []} onEdit={(task: Task) => { setSelectedTask(task); setOpenForm(true); }} onDelete={(id: string) => deleteMutation.mutate(id)} />

            <TaskForm open={openForm} onClose={() => setOpenForm(false)} task={selectedTask} onSave={() => queryClient.invalidateQueries({ queryKey: ["tasks"] })} />
        </Container>
    );
}
