import ClockChart from "../events/ClockChart"
import Main from "./Main"

const events = {
    sleepTime: {
        start: new Date(),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    bedTime: {
        start: new Date(Date.now() - 1 * 60 * 60 * 1000),
        end: new Date(Date.now() + 8 * 60 * 60 * 1000)
    },
    wakeTime: {
        start: new Date(Date.now() - 5 * 60 * 60 * 1000),
        end: new Date(Date.now() + 2 * 60 * 60 * 1000)
    },
    relaxationTime: {
        start: new Date(Date.now() + 4 * 60 * 60 * 1000),
        end: new Date(Date.now() + 15 * 60 * 60 * 1000)
    },
    sunrise: {
        start: new Date(Date.now() + 4 * 60 * 60 * 1000),
        end: new Date(Date.now() + 15 * 60 * 60 * 1000)
    },
    sunset: {
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