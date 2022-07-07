import { lights } from "../config"

import LightControls from "./LightControls"

const Lights = () => {
    return (
        <ion-list inset>
            <ion-list-header>Manual Control</ion-list-header>
            {
                Object.entries(lights).map(([key, value]) => (
                    <LightControls key={key} {...value} />
                ))
            }
        </ion-list>
    )
}

export default Lights