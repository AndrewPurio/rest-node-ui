import { Fragment } from "react"
import { homeLists } from "./constants"

import MusicCard from "../MusicCard"

import styles from "../styles.module.css"

const Main = () => {
    return (
        <ion-content>
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-searchbar id={styles.searchBar} animated />
                </ion-row>
                {
                    Object.entries(homeLists).map(([key, value]) => (
                        <Fragment key={key}>
                            <ion-row class="ion-no-margin ion-no-padding">
                                <ion-col size="12">
                                    <ion-list>
                                        <ion-item lines="none">
                                            <ion-label>{key}</ion-label>
                                            <ion-buttons>
                                                <ion-button fill="clear">See all</ion-button>
                                            </ion-buttons>
                                        </ion-item>
                                    </ion-list>
                                </ion-col>
                            </ion-row>
                            <ion-row class={`${styles.horizontalStack} ion-nowrap`}>
                                {
                                    Object.entries(value).map(([key, value]) => (
                                        <ion-col key={key} size="6">
                                            <MusicCard {...value} />
                                        </ion-col>
                                    ))
                                }
                            </ion-row>
                        </Fragment>
                    ))
                }
            </ion-grid>
        </ion-content>
    )
}

export default Main