import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

interface FocusCardProps {
  minutes: number;
  seconds: number;
  running: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

function FocusCard(props: FocusCardProps) {
  return (
    <Card>
      <CardContent>

        <Typography
          variant="h5"
          align="center"
          mb={4}
        >
          Focus Session
        </Typography>

        <TimerDisplay
          minutes={props.minutes}
          seconds={props.seconds}
        />

        <Typography
          align="center"
          mt={3}
          color="text.secondary"
        >
          Deep Work Session
        </Typography>

        <TimerControls
          running={props.running}
          onStart={props.onStart}
          onPause={props.onPause}
          onStop={props.onStop}
        />

      </CardContent>
    </Card>
  );
}

export default FocusCard;