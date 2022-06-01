import { Cron } from "croner"

export const cronJob = (time: CronParameters = {}) => {
    const seconds = time.seconds !== undefined ? time.seconds: "*"
    const minutes = time.minutes !== undefined ? time.minutes: "*"
    const hours = time.hours !== undefined ? time.hours: "*"
    const days = time.days !== undefined ? time.days: "*"
    const months = time.months !== undefined ? time.months: "*"
    const daysOfWeek = time.daysOfWeek !== undefined ? time.daysOfWeek: "*"

    const pattern = `${seconds} ${minutes} ${hours} ${days} ${months} ${daysOfWeek}`

    const cron = new Cron(pattern, () => {
        console.log("Event fired:", new Date(), time)
    })

    return cron
}