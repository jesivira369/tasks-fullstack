"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import api from "../../../lib/api";
import InvitationsTable from "./InvitationsTable";

export default function InvitationsPage() {
    const queryClient = useQueryClient();

    const { data: invitations, isLoading, error } = useQuery({
        queryKey: ["invitations"],
        queryFn: async () => {
            const res = await api.get("/tasks/invitations/pending");
            return res.data;
        },
    });

    const respondMutation = useMutation({
        mutationFn: async ({ invitationId, accept }: { invitationId: string; accept: boolean }) =>
            api.post(`/tasks/invitation/${invitationId}/respond`, { accept }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["invitations"] });
        },
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">Error al cargar las invitaciones.</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Mis Invitaciones
            </Typography>
            <InvitationsTable invitations={invitations || []} onRespond={respondMutation.mutate} />
        </Container>
    );
}
