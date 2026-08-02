import Grid from "@mui/material/Grid";

import { useTasks } from "../../context/TaskContext";

import TaskColumn from "./TaskColumn";

function KanbanBoard() {
  const { tasks } = useTasks();

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={tasks}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TaskColumn
          title="In Progress"
          status="in_progress"
          tasks={tasks}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TaskColumn
          title="Done"
          status="done"
          tasks={tasks}
        />
      </Grid>
    </Grid>
  );
}

export default KanbanBoard;