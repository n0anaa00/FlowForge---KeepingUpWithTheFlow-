import {
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import { todayTasks } from "../../mock/dashboardData";

function TaskList() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>

        <Typography variant="h6" mb={2}>
          Today's Tasks
        </Typography>

        <List>
          {todayTasks.map(task => (
            <ListItem key={task.id} disablePadding>

              <Checkbox checked={task.completed} />

              {task.title}

            </ListItem>
          ))}
        </List>

      </CardContent>
    </Card>
  );
}

export default TaskList;