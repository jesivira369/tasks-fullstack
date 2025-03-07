"use client";

import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    CircularProgress,
    IconButton,
    Typography,
    Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";

interface InviteUserModalProps {
    taskId: string;
    userId: string;
    open: boolean;
    onClose: () => void;
}

export default function InviteUserModal({ taskId, userId, open, onClose }: InviteUserModalProps) {
    const [selectedUser, setSelectedUser] = useState<string>("");
    const queryClient = useQueryClient();

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ["users"],
        queryFn: async ({ pageParam = 1 }) => {
            const res = await api.get(`/users?page=${pageParam}&limit=10`);
            return res.data;
        },
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length === 10 ? allPages.length + 1 : undefined,
        initialPageParam: 1,
    });

    const users = data?.pages.flat() || [];

    const inviteMutation = useMutation({
        mutationFn: async () => api.post(`/tasks/${taskId}/invite/${selectedUser}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks", taskId] });
            onClose();
        },
    });

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                Invitar Colaborador
                <IconButton onClick={onClose} sx={{ position: "absolute", right: 10, top: 10 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height={100}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Selecciona un usuario para colaborar en esta tarea:
                        </Typography>

                        <Select
                            value={selectedUser}
                            onChange={(e) => setSelectedUser(e.target.value)}
                            fullWidth
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                Selecciona un usuario...
                            </MenuItem>
                            {users.map((user) => (
                                <MenuItem key={user.id} value={user.id} disabled={user.id === userId}>
                                    {user.email} {user.id === userId ? "(Tú)" : ""}
                                </MenuItem>
                            ))}
                        </Select>

                        {hasNextPage && (
                            <Box display="flex" justifyContent="center" mt={2}>
                                <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                                    {isFetchingNextPage ? "Cargando..." : "Cargar más"}
                                </Button>
                            </Box>
                        )}
                    </>
                )}
            </DialogContent>

            <DialogActions>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => inviteMutation.mutate()}
                    disabled={!selectedUser || inviteMutation.isPending}
                >
                    {inviteMutation.isPending ? "Enviando..." : "Enviar Invitación"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
