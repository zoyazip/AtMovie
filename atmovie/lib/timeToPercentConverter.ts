interface ITimeStructure {
    startAt: number,
    endAt: number,
    duration: number,
}


const timeToPercent = (timeStructure: ITimeStructure): number => {
    const start = timeStructure.startAt
    const end = timeStructure.endAt
    const duration = timeStructure.duration

    return Math.floor(((end - start) / duration) * 100)
}

export const timeToWidth = (timeStructure: ITimeStructure): number => {
    return timeToPercent(timeStructure)
}

export const timeToMargin = (timeStructure: ITimeStructure, prev?: ITimeStructure): number => {
    if (prev) {
        return timeToPercent(timeStructure) + timeToPercent(prev)
    } else {
        return timeToPercent(timeStructure) + timeToPercent({startAt: 0, endAt: 0, duration: 1})
    }
}