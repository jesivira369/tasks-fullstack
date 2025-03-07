"use client";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    Container, Typography, Button, Select, MenuItem, Box, FormControl, InputLabel, IconButton, CircularProgress,
    Modal
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import api from "../../../lib/api";
import { Task, User } from "@repo/types";
import { useParams } from "next/navigation";
import InviteUserModal from "../../../components/TaskInvitation";
import TaskForm from "../../../components/TaskForm";
import { toast } from "react-toastify";

export default function TaskDetails() {
    const { id } = useParams();
    const [openEdit, setOpenEdit] = useState(false);
    const [openInvite, setOpenInvite] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");

    const queryClient = useQueryClient();

    const { data: task, isLoading, error } = useQuery({
        queryKey: ["task", id],
        queryFn: async () => {
            const res = await api.get<Task>(`/tasks/${id}`);
            return res.data;
        },
    });

    const updateStatusMutation = useMutation({
        mutationFn: async (status: string) => {
            return api.patch(`/tasks/${id}/status`, { status });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task", id] });
            setOpenConfirm(false);
            toast.success("Estado de tarea actualizado");
        },
        onError: () => {
            setOpenConfirm(false);
            toast.error("Error al actualizar el estado de la tarea");
        }
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error al cargar la tarea</Typography>;
    if (!task) return <Typography color="error">Tarea no encontrada</Typography>;

    return (
        <Container maxWidth="md" sx={{ mt: 4, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h4">{task.title}</Typography>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="task-status-label">Status</InputLabel>
                    <Select
                        labelId="task-status-label"
                        value={task.status}
                        onChange={(e) => {
                            setSelectedStatus(e.target.value);
                            setOpenConfirm(true);
                        }}
                        autoWidth
                    >
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

            <Modal open={openConfirm} onClose={() => setOpenConfirm(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 300,
                        bgcolor: "background.paper",
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 24,
                        textAlign: "center",
                    }}
                >
                    <Typography>¿Estás seguro de cambiar el estado a {selectedStatus}?</Typography>
                    <Box mt={2} display="flex" justifyContent="space-around">
                        <Button variant="contained" color="primary" onClick={() => updateStatusMutation.mutate(selectedStatus)}>
                            Confirmar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpenConfirm(false)}>
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <TaskForm open={openEdit} onClose={() => setOpenEdit(false)} task={task} onSave={() => queryClient.invalidateQueries({ queryKey: ["task", id] })} />

            <InviteUserModal taskId={task.id} open={openInvite} onClose={() => setOpenInvite(false)} userId={task.user.id} />
        </Container>
    );
}
