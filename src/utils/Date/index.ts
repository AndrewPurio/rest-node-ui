import { DateTime, DurationLike } from "luxon"

export const getStartTime = (end: Date, span: DurationLike) => {
    const date = DateTime.fromJSDate(end)

    date.minus(span)

    return date
}

export const getEndTime = (start: Date, span: DurationLike) => {
    const date = DateTime.fromJSDate(start)

    date.plus(span)

    return date
}