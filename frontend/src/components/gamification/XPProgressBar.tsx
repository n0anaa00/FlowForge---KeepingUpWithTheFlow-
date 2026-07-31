import {
  LinearProgress,
  Typography,
} from "@mui/material";

interface Props {
  xp: number;
}

function XPProgressBar({
  xp,
}: Props) {
  const progress = xp % 500;

  return (
    <>
      <Typography mb={1}>
        XP Progress
      </Typography>

      <LinearProgress
        variant="determinate"
        value={(progress / 500) * 100}
      />

      <Typography
        variant="body2"
        mt={1}
      >
        {progress}/500 XP
      </Typography>
    </>
  );
}

export default XPProgressBar;