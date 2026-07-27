import {
  useEffect,
  useState,
} from "react";

import FocusCard from "./FocusCard";

const START_TIME = 25 * 60;

function FocusTimer() {
  const [timeLeft, setTimeLeft] =
    useState(START_TIME);

  const [running, setRunning] =
    useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setTimeLeft(previous =>
        previous > 0 ? previous - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  return (
    <FocusCard
      minutes={minutes}
      seconds={seconds}
      running={running}
      onStart={() => setRunning(true)}
      onPause={() => setRunning(previous => !previous)}
      onStop={() => {
        setRunning(false);
        setTimeLeft(START_TIME);
      }}
    />
  );
}

export default FocusTimer;