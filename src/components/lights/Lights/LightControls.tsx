import { moonOutline } from "ionicons/icons"
import { FC } from "react"
import BrightnessAdjustment from "./BrightnessAdjustment"

interface LightControlsProps {
    name: string
    icon: string
}

const LightControls: FC<LightControlsProps> = ({ name, icon }) => {
  return (
    <ion-accordion toggle-icon={icon}>
        <ion-item slot="header">
            <ion-label>{name}</ion-label>
        </ion-item>
         
        <ion-list slot="content">
            <ion-item>
                <BrightnessAdjustment icon={icon} />
            </ion-item>
        </ion-list>
    </ion-accordion>
  )
}

export default LightControls