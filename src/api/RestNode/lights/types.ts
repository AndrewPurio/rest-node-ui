export enum Lights {
    Night = "night",
    Wake = "wake"
}

export enum LightsState {
    Off = "OFF",
    On = "ON"
}

export interface LightsQuery {
    state: LightsState,
    brightness: number
}