import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";

function DailyQuestCard() {
  const progress = 60;

  return (
    <Card>
      <CardContent>

        <Typography
          variant="h6"
          mb={2}
        >
          Daily Quest
        </Typography>

        <Typography>
          Complete 5 Focus Sessions
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ mt: 2 }}
        />

        <Typography
          mt={1}
          color="text.secondary"
        >
          3 / 5 completed
        </Typography>

      </CardContent>
    </Card>
  );
}

export default DailyQuestCard;