"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TablePagination,
    Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RespondInvitationModal from "./RespondInvitationModal";
import { Invitation } from "@repo/types";

interface InvitationsTableProps {
    invitations: Invitation[];
    onRespond: (params: { invitationId: string; accept: boolean }) => void;
}

export default function InvitationsTable({ invitations, onRespond }: InvitationsTableProps) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedInvitation, setSelectedInvitation] = useState<Invitation | null>(null);
    const [responseType, setResponseType] = useState<boolean | null>(null);

    const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tarea</TableCell>
                            <TableCell>Invitado por</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invitations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((invitation) => (
                            <TableRow key={invitation.id}>
                                <TableCell>{invitation.task.title}</TableCell>
                                <TableCell>{invitation.task.user.email}</TableCell>
                                <TableCell>{new Date(invitation.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell sx={{ display: "flex", gap: 1 }}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            setSelectedInvitation(invitation);
                                            setResponseType(true);
                                        }}
                                    >
                                        <CheckIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => {
                                            setSelectedInvitation(invitation);
                                            setResponseType(false);
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={invitations.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>

            <RespondInvitationModal
                open={Boolean(selectedInvitation)}
                onClose={() => setSelectedInvitation(null)}
                invitation={selectedInvitation}
                accept={responseType!}
                onConfirm={(id, accept) => {
                    onRespond({ invitationId: id, accept });
                    setSelectedInvitation(null);
                }}
            />
        </Box>
    );
}
