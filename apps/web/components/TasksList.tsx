"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Task } from "@repo/types";
import TaskForm from "./TaskForm";

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: string) => void;
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
    const [filterStatus, setFilterStatus] = useState<string>("ALL");

    const filteredTasks = tasks.filter((task) =>
        filterStatus === "ALL" ? true : task.status === filterStatus
    );

    return (
        <>
            <Typography variant="h6" sx={{ mb: 2 }}>Filtrar por estado</Typography>
            <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
            >
                <MenuItem value="ALL">Todos</MenuItem>
                <MenuItem value="PENDING">Pendientes</MenuItem>
                <MenuItem value="COMPLETED">Completadas</MenuItem>
            </Select>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Fecha de Creación</TableCell>
                            <TableCell>Colaboradores</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>
                                    {task.description?.length > 50
                                        ? `${task.description.substring(0, 50)}...`
                                        : task.description}
                                </TableCell>
                                <TableCell>{new Date(task.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>{task?.collaborators?.length > 0 ? "Sí" : "No"}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(task)} color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => console.log("Detalles de tarea")} color="secondary">
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(task.id)} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
