import { useRouter } from "next/router"
import { alarm, bulb, musicalNotes, bed } from "ionicons/icons"
import { FC } from "react"

interface EventCardProps {
    title: string
    icon: number
    color: string
}

const EventCard: FC<EventCardProps> = ({ title, icon, color }) => {
    const router = useRouter()

    const icons = [alarm, bulb, musicalNotes, bed];
    const colors = ['#2dd36f', '#eb445a', '#71964b', '#e0ac08']

    const redirectToSetting = () => {
        const path = ""

        router.push(path)
    }

    return (
        <ion-card button onClick={redirectToSetting} class="card">
            <ion-card-content>
                <ion-grid>
                    <ion-row class="ion-justify-content-center ion-align-items-center">
                        <ion-icon class="setting" icon={icons[icon]} size="large" />
                    </ion-row>
                    <ion-row class="ion-justify-content-center ion-align-items-center">
                        <ion-text
                            class="ion-text-center ion-text-nowrap ion-text-capitalize setting"
                        >
                            {title}
                        </ion-text>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
            <style jsx>{`
                 .card {
                    background-color: ${colors[icon]};
                    height: 120px;
                 }     

                .setting {
                    color: ${color}
                }    
             `}</style>
        </ion-card>
    )
}

export default EventCard