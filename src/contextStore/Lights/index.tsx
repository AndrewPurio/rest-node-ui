import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { requestLights } from "../../api/RestNode/lights";
import { Lights, LightsQuery, LightsState } from "../../api/RestNode/lights/types";

interface LightsContextProvider {
    children?: ReactNode
}

interface ContextInterface {
    [Lights.Night]: LightsQuery,
    [Lights.Wake]: LightsQuery ,
    updateLightState: (type: Lights, query: LightsQuery) => Promise<void>
}

const dummyLightState = {
    state: LightsState.Off,
    brightness: 0
}

const LightsContext = createContext<ContextInterface>({
    [Lights.Night]: dummyLightState,
    [Lights.Wake]: dummyLightState,
    updateLightState: async () => {}
})

export const useLights = () => useContext(LightsContext)

export const LightsContextProvider: FC<LightsContextProvider> = ({ children }) => {
    const [nightLight, setNightLightState] = useState(dummyLightState)
    const [wakeLight, setWakeLightState] = useState(dummyLightState)
    const stateUpdater = {
        [Lights.Night]: setNightLightState,
        [Lights.Wake]: setWakeLightState
    }

    const updateLightState = async (type: Lights, query: LightsQuery) => {
        try {
            await requestLights(type, query)

            stateUpdater[type](query)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    }, [])

    return (
        <LightsContext.Provider value={{
            night: nightLight,
            wake: wakeLight,
            updateLightState
        }}>
            {children}
        </LightsContext.Provider>
    )
}