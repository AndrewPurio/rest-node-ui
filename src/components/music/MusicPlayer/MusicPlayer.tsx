import { ellipsisVerticalOutline, heartOutline, menuOutline, moonOutline, playOutline, playSkipBackOutline, playSkipForwardOutline, repeatOutline } from "ionicons/icons"

import styles from "./styles.module.css"

const MusicPlayer = () => {
  return (
    <>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button>
              <ion-icon icon={menuOutline} slot="icon-only" />
            </ion-button>
          </ion-buttons>

          <ion-title>
            Night Sound
          </ion-title>

          <ion-buttons slot="end">
            <ion-button>
              <ion-icon icon={ellipsisVerticalOutline} slot="icon-only" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-grid>
          <ion-row class="ion-justify-content-center ion-padding ion-margin">
            <ion-img class={styles.musicImg} src="/assets/despa.jpg" alt="Night Sound" />
          </ion-row>

          <ion-row class="ion-justify-content-center">
            <ion-text color="primary">
              <h1>Despacito</h1>
            </ion-text>
          </ion-row>

          <ion-row class="ion-justify-content-center">
            <ion-text color="secondary">
              <h3>Night Sounds | Me</h3>
            </ion-text>
          </ion-row>
        </ion-grid>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button>
              <ion-icon icon={repeatOutline} slot="icon-only" />
            </ion-button>
          </ion-buttons>

          <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-buttons>
                <ion-button>
                  <ion-icon icon={playSkipBackOutline} slot="icon-only" />
                </ion-button>

                <ion-button>
                  <ion-icon icon={playOutline} slot="icon-only" />
                </ion-button>

                <ion-button>
                  <ion-icon icon={playSkipForwardOutline} slot="icon-only" />
                </ion-button>
              </ion-buttons>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-buttons>
                <ion-button>
                  <ion-icon icon={moonOutline} slot="icon-only" />
                </ion-button>
              </ion-buttons>
            </ion-row>
          </ion-grid>

          <ion-buttons slot="end">
            <ion-button>
              <ion-icon icon={heartOutline} slot="icon-only" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    </>
  )
}

export default MusicPlayer