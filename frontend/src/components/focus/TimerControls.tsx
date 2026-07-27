import {
  Button,
  Stack,
} from "@mui/material";

interface TimerControlsProps {
  running: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

function TimerControls({
  running,
  onStart,
  onPause,
  onStop,
}: TimerControlsProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      mt={4}
    >
      <Button
        variant="contained"
        onClick={onStart}
      >
        Start
      </Button>

      <Button
        variant="outlined"
        onClick={onPause}
      >
        {running ? "Pause" : "Resume"}
      </Button>

      <Button
        color="error"
        variant="contained"
        onClick={onStop}
      >
        Stop
      </Button>
    </Stack>
  );
}

export default TimerControls;