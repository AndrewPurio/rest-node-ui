import { moonOutline } from "ionicons/icons"
import { FC } from "react"

interface BrightnessAdjustmentProps {
    icon: string
}

const BrightnessAdjustment: FC<BrightnessAdjustmentProps> = ({ icon }) => {
  return (
    <ion-range min={0} max={100}>
        <ion-icon slot="start" size="small" icon={icon} />
        <ion-icon slot="end" icon={icon} />
    </ion-range>
  )
}

export default BrightnessAdjustment