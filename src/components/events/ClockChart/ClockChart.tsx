import Chart from "chart.js/auto"

import { ChartConfiguration, ChartTypeRegistry } from "chart.js"
import { FC, useEffect, useMemo } from "react"
import { convertCamelCaseToNormalCase } from "../../../utils/Text"
import { eventStyles } from "../../../styles/events"

interface ClockChartProps {
    events: {
        sleepTime: ClockEvent,
        wakeTime: ClockEvent,
        bedTime: ClockEvent,
        relaxationTime: ClockEvent
    }
}

const ClockChart: FC<ClockChartProps> = ({ events }) => {
    const clockEvents = useMemo(() => {
        const eventEntries = Object.entries(events) as [key: keyof typeof eventStyles, value: ClockEvent][]

        const datasets = eventEntries.map(([key, { start, end }]) => {
            const midnight = new Date()
            midnight.setHours(0, 0, 0, 0)

            const diff = end.getTime() - start.getTime()
            const labels = [convertCamelCaseToNormalCase(key)]
            const data = [start.getTime() - midnight.getTime()]
            const backgroundColor = [eventStyles[key].color]
            const hoverBackgroundColor = [eventStyles[key].color]

            const msInADay = 24 * 60 * 60 * 1000

            const circumference = 360 * diff / msInADay
            const rotation = 360 * (data[0]) / msInADay

            return { labels, data, backgroundColor, hoverBackgroundColor, circumference, rotation }
        })

        return datasets
    }, [events])

    useEffect(() => {
        const config: ChartConfiguration<"doughnut", number[], string> = {
            type: 'doughnut',
            data: {
                datasets: [...clockEvents, {
                    data: [1],
                    backgroundColor: ["#FFFFFF"]
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgb(255, 99, 132)'
                        }
                    }
                }
            }
        }
        
        const chart = new Chart("clock-chart", config)

        return () => {
            chart.destroy()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <canvas id="clock-chart">
            <ion-text>Missing Clock Data</ion-text>
        </canvas>
    )
}

export default ClockChart