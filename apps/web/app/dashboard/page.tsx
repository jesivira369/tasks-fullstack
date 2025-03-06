"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from "@mui/material";

export default function Dashboard() {
    const { data: session } = useSession();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Mis Tareas
            </Typography>
        </Container>
    );
}
