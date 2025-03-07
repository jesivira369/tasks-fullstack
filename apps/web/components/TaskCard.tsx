import { Card, CardContent, Typography, Chip } from "@mui/material";

interface TaskCardProps {
    task: {
        id: string;
        title: string;
        description?: string;
        status: "PENDING" | "COMPLETED";
    };
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {task.description ? (task.description.length > 100 ? `${task.description.slice(0, 100)}...` : task.description) : "Sin descripción"}
                </Typography>
                <Chip
                    label={task.status === "PENDING" ? "Pendiente" : "Completada"}
                    color={task.status === "PENDING" ? "warning" : "success"}
                    sx={{ mt: 1 }}
                />
            </CardContent>
        </Card>
    );
}
