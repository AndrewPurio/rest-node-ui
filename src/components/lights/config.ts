import { moonOutline, sunnyOutline } from "ionicons/icons";
import { Lights } from "../../api/RestNode/lights/types";

export const lights = {
    [Lights.Night]: {
        name: "Night Light",
        icon: moonOutline,
        id: Lights.Night
    },
    [Lights.Wake]: {
        name: "Wake Light",
        icon: sunnyOutline,
        id: Lights.Wake
    }
}