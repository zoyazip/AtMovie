interface timerProps {
    duration: number,
    current: number
}

export const Timer = ({current, duration}: timerProps) => {

    const getTimerFormat = (time: number): string => {
        const timeRounded = Math.round(time)

        let min: number = 0
        let sec: number = 0
        


        if (timeRounded > 59) {
            sec = timeRounded - 60
            min++
        } else {
            sec = timeRounded
        }


        return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
    }

    return (
        <>
            <p className='text-white text-sm text-center'>
                <span className='w-10 inline-block'>
                    {`${getTimerFormat(current)}`}
                </span>
                <span>/</span>
                <span>
                    {`${getTimerFormat(duration)}`}
                </span>
            </p>
        </>
    )
}