"use client";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from "@mui/material";
import { Invitation } from "@repo/types";

interface RespondInvitationModalProps {
    open: boolean;
    onClose: () => void;
    invitation: Invitation | null;
    accept: boolean;
    onConfirm: (invitationId: string, accept: boolean) => void;
}

export default function RespondInvitationModal({
    open,
    onClose,
    invitation,
    accept,
    onConfirm,
}: RespondInvitationModalProps) {
    if (!invitation) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>
                {accept ? "Aceptar Invitación" : "Rechazar Invitación"}
            </DialogTitle>

            <DialogContent>
                <Typography>
                    {accept
                        ? `¿Estás seguro de que quieres unirte a la tarea "${invitation.task.title}"?`
                        : `¿Estás seguro de que quieres rechazar esta invitación?`}
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    color={accept ? "primary" : "error"}
                    onClick={() => onConfirm(invitation.id, accept)}
                >
                    {accept ? "Aceptar" : "Rechazar"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
