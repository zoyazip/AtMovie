interface IFilm {
    id: number
    name: string,
    genre: string,
    cast: Cast[]
    fullReplicaText: FullReplicaText[]
}

interface Cast {
    id: number,
    name: string,
    color: string,
    colorName: string
}

interface FullReplicaText {
    id: number,
    castId: number,
    fullRelicaText: string,
    captions: CaptionData[],
    progressBarData: ProgressBarData
}


interface CaptionData {
    phrase: string,
    startsAt: number,
    endsAt: number
}

interface ProgressBarData {
    id: number,
    width: WidthData,
    margin: MarginData[],
    percentage: number[]
}

interface WidthData {
    startAt: number,
    endAt: number
}

interface MarginData {
    startAt: number,
    endAt: number
}