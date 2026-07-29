import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

interface FocusContextType {

    running: boolean;

    timeLeft: number;

    todayMinutes: number;

    sessionsToday: number;

    xpEarned: number;

    start: () => void;

    pause: () => void;

    stop: () => void;
}

const START_TIME = 25 * 60;

const FocusContext = createContext<
    FocusContextType | undefined
>(undefined);

interface Props {
    children: ReactNode;
}

export function FocusProvider({ children }: Props) {

    const [running, setRunning] = useState(false);

    const [timeLeft, setTimeLeft] =
        useState(START_TIME);

    const [todayMinutes, setTodayMinutes] =
        useState(0);

    const [sessionsToday, setSessionsToday] =
        useState(0);

    const [xpEarned, setXpEarned] =
        useState(0);

    useEffect(() => {

        if (!running)
            return;

        const timer = setInterval(() => {

            setTimeLeft(previous => {

                if (previous <= 1) {

                    setRunning(false);

                    setTodayMinutes(previousMinutes =>
                        previousMinutes + 25
                    );

                    setSessionsToday(previous =>
                        previous + 1
                    );

                    setXpEarned(previous =>
                        previous + 50
                    );

                    return START_TIME;
                }

                return previous - 1;

            });

        }, 1000);

        return () => clearInterval(timer);

    }, [running]);

    const start = () => setRunning(true);

    const pause = () =>
        setRunning(previous => !previous);

    const stop = () => {

        setRunning(false);

        setTimeLeft(START_TIME);

    };

    return (

        <FocusContext.Provider
            value={{

                running,

                timeLeft,

                todayMinutes,

                sessionsToday,

                xpEarned,

                start,

                pause,

                stop

            }}
        >

            {children}

        </FocusContext.Provider>

    );

}

export function useFocus() {

    const context =
        useContext(FocusContext);

    if (!context)
        throw new Error(
            "useFocus must be used inside FocusProvider"
        );

    return context;

}