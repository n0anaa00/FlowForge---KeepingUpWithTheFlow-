import {
  Stack,
  Typography,
} from "@mui/material";

import type {
  Task,
  TaskStatus,
} from "../../types/Task";

import TaskCard from "./TaskCard";

interface Props {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

function TaskColumn({
  title,
  status,
  tasks,
}: Props) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">
        {title}
      </Typography>

      {tasks
        .filter(
          task => task.status === status,
        )
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
    </Stack>
  );
}

export default TaskColumn;