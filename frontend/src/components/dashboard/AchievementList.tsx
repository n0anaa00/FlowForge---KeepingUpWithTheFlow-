import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { achievements } from "../../mock/dashboardData";

function AchievementList() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>

        <Typography variant="h6" mb={2}>
          Latest Achievements
        </Typography>

        <Stack spacing={2}>

          {achievements.map(item => (
            <Chip
              key={item}
              label={item}
              color="primary"
            />
          ))}

        </Stack>

      </CardContent>
    </Card>
  );
}

export default AchievementList;