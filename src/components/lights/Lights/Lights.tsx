import { lights } from "../config"

import LightControls from "./LightControls"

const Lights = () => {
    return (
        <ion-list inset>
            <ion-list-header>Manual Control</ion-list-header>
            {
                Object.entries(lights).map(([key, value]) => (
                    <ion-accordion-group key={key} expand="inset">
                        <LightControls {...value} />
                    </ion-accordion-group>
                ))
            }
        </ion-list>
    )
}

export default Lights