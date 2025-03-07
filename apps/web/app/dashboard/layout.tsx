"use client";

import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Assignment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import Link from "next/link";

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: drawerWidth }}>
            <Toolbar />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/dashboard">
                        <ListItemIcon>
                            <TaskIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mis Tareas" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/dashboard/invitaciones">
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Invitaciones" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" noWrap>
                        Tareas Lemon
                    </Typography>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                {drawer}
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 2, mt: 8, width: "100%" }}>
                {children}
            </Box>
        </Box>
    );
}
