import { useRouter } from "next/router"
import { FC } from "react"

interface EventCardProps {
    title: string
    icon: string
    color: string
    path: string
}

const EventCard: FC<EventCardProps> = ({ title, icon, color, path }) => {
    const router = useRouter()

    const redirectToSetting = () => {
        router.push(path)
    }

    return (
        <ion-card button onClick={redirectToSetting} class="card">
            <ion-card-content>
                <ion-grid>
                    <ion-row class="ion-justify-content-center ion-align-items-center">
                        <ion-icon class="setting" icon={icon} size="large" />
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
                    background-color: ${color};
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