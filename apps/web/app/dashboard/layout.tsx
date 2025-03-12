"use client";

import { Box, CssBaseline, Toolbar, Container } from "@mui/material";
import Navbar from "../../components/NavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ width: "100vw", height: "100vh" }}>
            <CssBaseline />
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 12, width: "100%" }}>
                <Container maxWidth="lg">{children}</Container>
            </Box>
        </Box>
    );
}

