import { useEffect, useRef, useState } from 'react'

interface videoTextProps {
    currentTime: number,
    film: IFilm
}

export const VideoText = ({currentTime, film}: videoTextProps) => {


    const [currentCaption, setCurrentCaption] = useState(0)
    const [currentRole, setCurrentRole] = useState(0)
    const [hidden, setHidden] = useState('block')

    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
   if (currentRole < film.fullReplicaText.length) {
        const currentRoleCaptionsLength = film.fullReplicaText[currentRole].captions.length;
        const currentCaptionStartTime = film.fullReplicaText[currentRole].captions[currentCaption].startsAt;
        const currentCaptionEndTime = film.fullReplicaText[currentRole].captions[currentCaption].endsAt;

        if (currentTime >= currentCaptionEndTime) {
            if (currentCaption < currentRoleCaptionsLength - 1) {
                setCurrentCaption(prev => prev + 1)
            } else {
                if (currentRole < film.fullReplicaText.length - 1) {
                    setCurrentRole(prev => prev + 1)
                    setCurrentCaption(0)
                }
            }
            setHidden('none') // Hide captions when the current caption ends
        } else if (currentTime < currentCaptionStartTime) {
            if (currentCaption > 0) {
                setCurrentCaption(prev => prev - 1)
            } else {
                if (currentRole > 0) {
                    setCurrentRole(prev => prev - 1)
                    setCurrentCaption(film.fullReplicaText[currentRole - 1].captions.length - 1)
                }
            }
            setHidden('none') // Hide captions when waiting for the current caption to start
        } else {
            setHidden('block') // Show captions when within the start and end times of the current caption
        }
    }
        
        console.log(`Current time: ${currentTime}`)

    }, [currentTime, currentRole, currentCaption])


    return (
        <>
            <div className="px-4 w-full h-full flex justify-center text-white overflow-y-hidden">
                <div style={{backgroundColor: `${film.cast[film.fullReplicaText[currentRole].castId].color}`, display: `${hidden}` }} className='flex items-start bg-red-700 px-4 justify-center z-100'>
                    <div  ref={textRef} className={`text leading-8 w-7/8 h-fit flex`}>
                        <p>{film.fullReplicaText[currentRole].captions[currentCaption].phrase}</p>
                        <div className="divider px-2"><p>|</p></div>
                        <p className=''>{currentCaption + 1}/{film.fullReplicaText[currentRole].captions.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

