import { NextPage } from "next"
import { LightsContextProvider } from "../../contextStore/Lights"

import Lights from "../../components/lights/Lights"

const LightsPage: NextPage = () => {
  return (
    <LightsContextProvider>
      <ion-content>
        <Lights />
      </ion-content>
    </LightsContextProvider>
  )
}

export default LightsPage