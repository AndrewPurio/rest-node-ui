import { discOutline, homeOutline, libraryOutline } from "ionicons/icons"
import { NextPage } from "next"
import Library from "../../components/music/Library"

import Main from "../../components/music/Main"
import MusicPlayer from "../../components/music/MusicPlayer"
import { AudioContextProvider } from "../../contextStore/Audio"

const SoundsPage: NextPage = () => {
    return (
        <AudioContextProvider>
            <ion-tabs>
                <ion-tab tab="home">
                    <Main />
                </ion-tab>

                <ion-tab tab="music-player">
                    <MusicPlayer />
                </ion-tab>

                <ion-tab tab="library">
                    <Library />
                </ion-tab>

                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="home">
                        <ion-label>Home</ion-label>
                        <ion-icon icon={homeOutline} />
                    </ion-tab-button>

                    <ion-tab-button tab="music-player">
                        <ion-label>Music Player</ion-label>
                        <ion-icon icon={discOutline} />
                    </ion-tab-button>

                    <ion-tab-button tab="library">
                        <ion-label>Library</ion-label>
                        <ion-icon icon={libraryOutline} />
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </AudioContextProvider>
    )
}

export default SoundsPage