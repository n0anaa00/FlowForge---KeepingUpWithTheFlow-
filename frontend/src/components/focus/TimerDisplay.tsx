import { Typography } from "@mui/material";

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

function TimerDisplay({
  minutes,
  seconds,
}: TimerDisplayProps) {
  return (
    <Typography
      variant="h2"
      textAlign="center"
      fontWeight={700}
    >
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </Typography>
  );
}

export default TimerDisplay;