import {
    createContext,
    useContext,
    useState,
    type ReactNode
} from "react";

import type { AnalyticsEvent }
from "../types/AnalyticsEvent";

interface AnalyticsContextType {

    events: AnalyticsEvent[];

    addEvent:
        (event: AnalyticsEvent) => void;

}

const AnalyticsContext =
createContext<
AnalyticsContextType | undefined
>(undefined);

interface Props {

    children: ReactNode;

}

export function AnalyticsProvider({
    children
}: Props) {

    const [events, setEvents] =
    useState<AnalyticsEvent[]>([]);

    const addEvent =
    (event: AnalyticsEvent) => {

        setEvents(previous => [

            event,

            ...previous

        ]);

    };

    return (

        <AnalyticsContext.Provider
        value={{

            events,

            addEvent

        }}
        >

            {children}

        </AnalyticsContext.Provider>

    );

}

export function useAnalytics() {

    const context =
    useContext(AnalyticsContext);

    if(!context)
        throw new Error(
            "AnalyticsProvider missing"
        );

    return context;

}