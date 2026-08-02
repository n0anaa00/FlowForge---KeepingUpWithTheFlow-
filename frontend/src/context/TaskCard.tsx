import {
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import type { Task } from "../../types/Task";

interface Props {
  task: Task;
}

function TaskCard({
  task,
}: Props) {
  return (
    <Card>
      <CardContent>

        <Typography variant="h6">
          {task.title}
        </Typography>

        <Typography
          color="text.secondary"
          mb={2}
        >
          {task.description}
        </Typography>

        <Chip
          label={`${task.storyPoints} SP`}
          color="primary"
        />

      </CardContent>
    </Card>
  );
}

export default TaskCard;