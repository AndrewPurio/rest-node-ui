import { useRef } from "react"

const SleepSchedule = () => {
    const timeInputRef = useRef<HTMLIonInputElement>()

    const handleTimeInput = async () => {
        try {
            const input = await timeInputRef.current?.getInputElement()

            input?.click()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ion-grid>
            <ion-row>
                <ion-text>Sleep Schedule</ion-text>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <ion-list>
                        <ion-item>
                            <ion-label>
                                Bedtime
                            </ion-label>
                            <ion-button onClick={handleTimeInput} slot="end">
                                9:00
                            </ion-button>
                            <ion-input ref={timeInputRef} type="time" />
                        </ion-item>
                    </ion-list>
                </ion-col>
            </ion-row>
        </ion-grid>
    )
}

export default SleepSchedule