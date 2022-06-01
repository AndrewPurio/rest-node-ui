import { homeOutline, searchOutline } from "ionicons/icons"
import { NextPage } from "next"
import Main from "../../components/music/Main"
import Search from "../../components/music/Search"

const SoundsPage: NextPage = () => {
    return (
        <ion-tabs>
            <ion-tab tab="home">
                <Main />
            </ion-tab>

            <ion-tab tab="search">
                <Search />
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home">
                    <ion-label>Home</ion-label>
                    <ion-icon icon={homeOutline} />
                </ion-tab-button>

                <ion-tab-button tab="search">
                    <ion-label>Search</ion-label>
                    <ion-icon icon={searchOutline} />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    )
}

export default SoundsPage