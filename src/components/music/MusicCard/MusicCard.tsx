import { FC } from "react"

import styles from "./styles.module.css"

interface MusicCardProps {
    title: string
    type: string
    imageSrc?: string
    composer?: string
}

const MusicCard: FC<MusicCardProps> = ({ title, type, composer, imageSrc }) => {
    const src = imageSrc || "/assets/marc-schulte-usflNyhUoCM-unsplash.jpg"
    const subtitle = composer ? `${type} | ${composer}` : type

    return (
        <ion-card>
            <ion-img class={styles.cardImg} src={src} alt={title} />
            <ion-card-header>
                <ion-card-title class={`${styles.title} ion-text-nowrap`}>{title}</ion-card-title>
                <ion-card-subtitle class="ion-text-nowrap">{subtitle}</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
    )
}

export default MusicCard