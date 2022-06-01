import { Range, RecurrenceRule, scheduleJob } from "node-schedule"

export const recurringEvent = () => {
    const rule = new RecurrenceRule()
    rule.dayOfWeek = [ new Range(0, 6) ]
    rule.hour = 9
    rule.minute = 39

    const job = scheduleJob(rule, (event) => {
        console.log("Scheduled event:", event)
    })
}

