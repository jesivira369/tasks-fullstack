"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Container, Typography, Button, Select, MenuItem, Box, FormControl, InputLabel, IconButton, CircularProgress
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import api from "../../../lib/api";
import { Task, User } from "@repo/types";
import { useParams } from "next/navigation";
import InviteUserModal from "../../../components/TaskInvitation";

export default function TaskDetails() {
    const { id } = useParams();
    const [openEdit, setOpenEdit] = useState(false);
    const [openInvite, setOpenInvite] = useState(false);

    const { data: task, isLoading, error } = useQuery({
        queryKey: ["task", id],
        queryFn: async () => {
            const res = await api.get<Task>(`/tasks/${id}`);
            return res.data;
        },
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error al cargar la tarea</Typography>;
    if (!task) return <Typography color="error">Tarea no encontrada</Typography>;

    return (
        <Container maxWidth="md" sx={{ mt: 4, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h4">{task.title}</Typography>

                <FormControl size="small" sx={{ minWidth: 180 }}>
                    <InputLabel>Status</InputLabel>
                    <Select value={task.status}>
                        <MenuItem value="PENDING">Pendiente</MenuItem>
                        <MenuItem value="COMPLETED">Completada</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
                Creado el: {new Date(task.createdAt).toLocaleDateString()}
            </Typography>

            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Descripción:</Typography>
                <Typography>{task.description}</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={() => setOpenEdit(true)}
                >
                    Editar tarea
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PersonAddIcon />}
                    onClick={() => setOpenInvite(true)}
                >
                    Agregar colaborador
                </Button>
            </Box>

            <InviteUserModal taskId={task.id} open={openInvite} onClose={() => setOpenInvite(false)} userId={task.user.id} />
        </Container>
    );
}
