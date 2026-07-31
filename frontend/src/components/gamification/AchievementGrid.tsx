import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { useGamification } from "../../context/GamificationContext";

function AchievementGrid() {
  const {
    achievements,
  } = useGamification();

  return (
    <Card>
      <CardContent>

        <Typography
          variant="h6"
          mb={2}
        >
          Achievements
        </Typography>

        <Stack spacing={2}>

          {achievements.map(
            achievement => (
              <Chip
                key={achievement.id}
                label={achievement.title}
                color={
                  achievement.unlocked
                    ? "success"
                    : "default"
                }
              />
            ),
          )}

        </Stack>

      </CardContent>
    </Card>
  );
}

export default AchievementGrid;