import { AccordionGroupChangeEventDetail } from "@ionic/core"
import { FC, useEffect, useRef } from "react"
import { Lights, LightsState } from "../../../api/RestNode/lights/types"
import { useLights } from "../../../contextStore/Lights"
import BrightnessAdjustment from "./BrightnessAdjustment"

interface LightControlsProps {
    name: string
    icon: string,
    id: Lights
}

const LightControls: FC<LightControlsProps> = ({ name, icon, id }) => {
    const accordionRef = useRef<HTMLIonAccordionGroupElement>()
    const lightsContext = useLights()
    const { updateLightState } = lightsContext

    useEffect(() => {
        let prevLight: Lights

        accordionRef.current?.addEventListener("ionChange", async (ev) => {
            const event = ev as CustomEvent<AccordionGroupChangeEventDetail<any>>
            const light: Lights = event.detail.value

            if (typeof light === "number")
                return

            try {
                await updateLightState(light || prevLight, {
                    state: light ? LightsState.On : LightsState.Off,
                    brightness: light ? lightsContext[light].brightness : 0
                })
            } catch (error) {
                console.log(error)
            }

            if (light)
                prevLight = light
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ion-accordion-group ref={accordionRef} expand="inset">
            <ion-accordion toggle-icon={icon} value={id}>
                <ion-item slot="header">
                    <ion-label>{name}</ion-label>
                </ion-item>

                <ion-list slot="content">
                    <ion-item>
                        <BrightnessAdjustment icon={icon} />
                    </ion-item>
                </ion-list>
            </ion-accordion>
        </ion-accordion-group>
    )
}

export default LightControls