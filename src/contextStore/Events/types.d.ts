interface EventContext {
    sleepTime: ClockEvent
    lights: LightsEvent
    sounds: SoundsEvent
    relaxationTime: ClockEvent
    eventHandler: (event: Events, value: ClockEvent) => void
}

interface ClockEvent {
    start: Date
    end: Date
}

interface LightsEvent {
    night: ClockEvent
    wake: ClockEvent
}

interface SoundsEvent {
    night: ClockEvent
    wake: ClockEvent
}

type Events = "SLEEP_TIME" | "NIGHT_LIGHT" | "WAKE_LIGHT" | "NIGHT_SOUND" | "WAKE_SOUND" | "RELAXATION_TIME"