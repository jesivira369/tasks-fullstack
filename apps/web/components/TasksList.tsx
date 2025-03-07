"use client";

import { useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, IconButton, TablePagination, Box,
    TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Task } from "@repo/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: string) => void;
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
    const [filterStatus, setFilterStatus] = useState<string>("ALL");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const router = useRouter();

    const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredTasks = tasks.filter((task) => {
        const isStatusMatch = filterStatus === "ALL" || task.status === filterStatus;
        const isDateInRange = (!startDate || new Date(task.createdAt) >= startDate) &&
            (!endDate || new Date(task.createdAt) <= endDate);
        return isStatusMatch && isDateInRange;
    });

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="ALL">Todos</MenuItem>
                    <MenuItem value="PENDING">Pendientes</MenuItem>
                    <MenuItem value="COMPLETED">Completadas</MenuItem>
                </Select>

                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    customInput={
                        <TextField
                            label="Fecha inicio"
                            variant="outlined"
                            fullWidth
                            sx={{ bgcolor: "white" }}
                        />
                    }
                />

                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    customInput={
                        <TextField
                            label="Fecha fin"
                            variant="outlined"
                            fullWidth
                            sx={{ bgcolor: "white" }}
                        />
                    }
                />
            </Box>

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
                        {filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>
                                    {task.description?.length > 50 ? `${task.description.substring(0, 50)}...` : task.description}
                                </TableCell>
                                <TableCell>{new Date(task.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>{task?.collaborators?.length > 0 ? "Sí" : "No"}</TableCell>
                                <TableCell
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        "@media (max-width:600px)": {
                                            flexDirection: "column",
                                            alignItems: "center",
                                        },
                                    }}
                                >
                                    <IconButton onClick={() => onEdit(task)} color="primary" sx={{ fontSize: "small" }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => router.push(`/dashboard/${task.id}`)} color="secondary" sx={{ fontSize: "small" }}>
                                        <VisibilityIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onDelete(task.id)} color="error" sx={{ fontSize: "small" }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredTasks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Box>
    );
}
