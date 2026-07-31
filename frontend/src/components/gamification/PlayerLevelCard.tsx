import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { useGamification } from "../../context/GamificationContext";
import XPProgressBar from "./XPProgressBar";

function PlayerLevelCard() {
  const {
    xp,
    level,
    streak,
  } = useGamification();

  return (
    <Card>
      <CardContent>

        <Typography variant="h5">
          Developer Level
        </Typography>

        <Typography
          variant="h2"
          color="primary"
        >
          {level}
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          🔥 {streak} Day Streak
        </Typography>

        <XPProgressBar xp={xp} />

      </CardContent>
    </Card>
  );
}

export default PlayerLevelCard;