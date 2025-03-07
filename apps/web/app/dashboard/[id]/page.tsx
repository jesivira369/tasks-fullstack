"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    Container,
    Typography,
    Box,
    Select,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    Grid,
    Card,
    CardContent,
    Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../../lib/api";
import TaskForm from "../../../components/TaskForm";

export default function TaskDetails({ params }: { params: { id: string } }) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [openForm, setOpenForm] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");

    const { data: task, isLoading, error } = useQuery({
        queryKey: ["task", params.id],
        queryFn: async () => {
            const res = await api.get(`/tasks/${params.id}`);
            return res.data;
        },
    });

    const updateStatusMutation = useMutation({
        mutationFn: async (status: string) => {
            return api.patch(`/tasks/${params.id}/status`, { status });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["task", params.id] });
            setOpenConfirm(false);
        },
    });

    if (isLoading) return <Typography>Cargando...</Typography>;
    if (error) return <Typography color="error">Error al cargar la tarea</Typography>;

    return (
        <Container maxWidth="md">
            <Card sx={{ mt: 4, p: 3 }}>
                <CardContent>
                    <Grid container alignItems="center" justifyContent="space-between">
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
                    </Grid>

                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                        <strong>Creado el:</strong> {new Date(task.createdAt).toLocaleDateString()}
                    </Typography>

                    <Box mt={3}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Descripción:
                        </Typography>
                        <Typography variant="body1">{task.description || "Sin descripción"}</Typography>
                    </Box>

                    <Box mt={3} display="flex" justifyContent="flex-start">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                            onClick={() => setOpenForm(true)}
                        >
                            Editar Tarea
                        </Button>
                    </Box>
                </CardContent>
            </Card>

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

            <TaskForm open={openForm} onClose={() => setOpenForm(false)} task={task} onSave={() => queryClient.invalidateQueries({ queryKey: ["task", params.id] })} />
        </Container>
    );
}
