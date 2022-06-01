import { FC, useEffect } from 'react'

import styles from "./styles.module.css"

import type { FallbackProps } from 'react-error-boundary'

const ErrorPage: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        // Error Handlers
        console.error("Component error:", error)

    }, [error])

    return (
        <ion-content>
            <ion-grid class={styles.grid}>
                <ion-row class="ion-justify-content-center">
                    <ion-title class="ion-text-center">Something went wrong</ion-title>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-button onClick={resetErrorBoundary}>
                        Go Back Home
                    </ion-button>
                </ion-row>
            </ion-grid>
        </ion-content>
    )
}

export default ErrorPage