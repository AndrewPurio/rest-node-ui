import ClockChart from "../events/ClockChart"
import Main from "./Main"

const events = {
    sleepTime: {
        start: new Date(),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    nightLight: {
        start: new Date(Date.now() - 1 * 60 * 60 * 1000),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    wakeLight: {
        start: new Date(Date.now() - 1 * 60 * 60 * 1000),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    nightSound: {
        start: new Date(Date.now() - 1 * 60 * 60 * 1000),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    wakeSound: {
        start: new Date(Date.now() - 1 * 60 * 60 * 1000),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    relaxation: {
        start: new Date(Date.now() + 4 * 60 * 60 * 1000),
        end: new Date(Date.now() + 15 * 60 * 60 * 1000)
    }
}

const Dashboard = () => {
    return (
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-padding">
                <ClockChart events={events} />
            </ion-row>

            <Main />
        </ion-grid>
    )
}

export default Dashboard