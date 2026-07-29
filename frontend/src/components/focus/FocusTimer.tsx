import FocusCard from "./FocusCard";

import { useFocus } from "../../context/FocusContext";

function FocusTimer() {

    const {

        running,

        timeLeft,

        start,

        pause,

        stop

    } = useFocus();

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    return (

        <FocusCard

            minutes={minutes}

            seconds={seconds}

            running={running}

            onStart={start}

            onPause={pause}

            onStop={stop}

        />

    );

}

export default FocusTimer;