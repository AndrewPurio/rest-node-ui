import { createContext, FC, ReactNode, useContext, useState } from "react";
import { events } from "./constants";

interface EventContextProvider {
    children?: ReactNode
}

const sampleDateStartAndEnd = {
    start: new Date(),
    end: new Date()
}

const EventContext = createContext<EventContext>({
    sleepTime: sampleDateStartAndEnd,
    lights: {
        night: sampleDateStartAndEnd,
        wake: sampleDateStartAndEnd
    },
    sounds: {
        night: sampleDateStartAndEnd,
        wake: sampleDateStartAndEnd
    },
    relaxationTime: sampleDateStartAndEnd,
    eventHandler: () => {}
})

export const useEventContext = () => useContext(EventContext)

export const EventContextProvider: FC<EventContextProvider> = ({ children }) => {
    const [sleepTime, setSleepTime] = useState<ClockEvent>(sampleDateStartAndEnd)

    const [nightLight, setNightLight] = useState<ClockEvent>(sampleDateStartAndEnd)
    const [wakeLight, setWakeLight] = useState<ClockEvent>(sampleDateStartAndEnd)

    const [nightSound, setNightSound] = useState<ClockEvent>(sampleDateStartAndEnd)
    const [wakeSound, setWakeSound] = useState<ClockEvent>(sampleDateStartAndEnd)

    const [relaxationTime, setRelaxationTime] = useState<ClockEvent>(sampleDateStartAndEnd)

    const lights = {
        night: nightLight,
        wake: wakeLight
    }

    const sounds = {
        night: nightSound,
        wake: wakeSound
    }

    const eventHandler = (event: Events, value: ClockEvent) => {
        const handlers = {
            [events.sleepTime]: setSleepTime,
            [events.lights.night]: setNightLight,
            [events.lights.wake]: setWakeLight,
            [events.sounds.night]: setNightSound,
            [events.sounds.wake]: setWakeSound,
            [events.relaxationTime]: setRelaxationTime
        }

        handlers[event](value)
    }

    return (
        <EventContext.Provider value={{
            sleepTime, lights, sounds, relaxationTime, eventHandler
        }}>
            {children}
        </EventContext.Provider>
    )
}