import { alarmOutline, bulbOutline, musicalNotesOutline, bedOutline } from "ionicons/icons"
import { routes } from "../../utils/Navigation/routes"

import EventCard from "../events/EventCard"

const listOfSettings = {
    sleepSchedule: {
        title: "Sleep Schedule",
        icon: alarmOutline,
        color: "#2DD36F",
        path: routes["SLEEP_SCHEDULE"]
    },
    lights: {
        title: "Lights",
        icon: bulbOutline,
        color: "EB445A",
        path: routes["LIGHTS"]
    },
    sounds: {
        title: "Sounds",
        icon: musicalNotesOutline,
        color: "#71964B",
        path: routes["SOUNDS"]
    },
    relaxation: {
        title: "Relaxation",
        icon: bedOutline,
        color: "#E0AC08",
        path: routes["RELAXATION"]
    }
}

const Main = () => {
    return (
        <ion-row class="ion-padding">
            {
                Object.entries(listOfSettings).map(([key, value]) => (
                    <ion-col key={key} size="6">
                        <EventCard {...value} />
                    </ion-col>
                ))
            }
        </ion-row>
    )
}

export default Main