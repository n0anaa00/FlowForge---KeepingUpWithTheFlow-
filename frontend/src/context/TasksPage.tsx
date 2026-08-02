import { Typography } from "@mui/material";

import AppLayout from "../../components/layout/AppLayout";
import KanbanBoard from "../../components/tasks/KanbanBoard";

function TasksPage() {
  return (
    <AppLayout>
      <Typography
        variant="h4"
        mb={4}
      >
        Sprint Board
      </Typography>

      <KanbanBoard />
    </AppLayout>
  );
}

export default TasksPage;