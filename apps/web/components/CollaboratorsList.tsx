import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";
import { TaskCollaborators } from "@repo/types";

interface CollaboratorsListProps {
    collaborators: TaskCollaborators[];
}

export default function CollaboratorsList({ collaborators }: CollaboratorsListProps) {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Colaboradores
            </Typography>
            {collaborators ? (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {collaborators.map((collaborator) => (
                                <TableRow key={collaborator.id}>
                                    <TableCell>{collaborator.user.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography color="text.secondary">No hay colaboradores asignados.</Typography>
            )}
        </Box>
    );
}