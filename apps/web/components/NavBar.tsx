"use client";

import { useState } from "react";
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Assignment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        router.push("/auth");
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Título */}
                <Typography variant="h6" component={Link} href="/dashboard" sx={{ textDecoration: "none", color: "inherit" }}>
                    Tareas Lemon
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        component={Link}
                        href="/dashboard"
                        startIcon={<TaskIcon />}
                        sx={{
                            color: "white",
                            bgcolor: "rgba(255,255,255,0.2)",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                            px: 2,
                        }}
                    >
                        Mis Tareas
                    </Button>

                    <Button
                        component={Link}
                        href="/dashboard/invitations"
                        startIcon={<PersonAddIcon />}
                        sx={{
                            color: "white",
                            bgcolor: "rgba(255,255,255,0.2)",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                            px: 2,
                        }}
                    >
                        Invitaciones
                    </Button>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        color="inherit"
                        sx={{
                            bgcolor: "rgba(255,255,255,0.2)",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                        }}
                    >
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>U</Avatar>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
