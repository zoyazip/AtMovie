import { useEffect, useRef, useState } from 'react'

interface videoTextProps {
    currentTime: number
}

const txt = "Lorem ipsum dolor sit amet consectetur. Sed semper nunc in mattis urna aliquam. Donec sed suspendisse sed pharetra ut lectus nunc vel sollicitudin. Sed varius nulla urna lectus tellus condimentum vehicula pellentesque pulvinar. Natoque sed purus sagittis at vestibulum facilisi nisl."

const ccPlaceholder: IRoleExtended[] = [
        {
            id: 0,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. And I will strike down upon thee with great vengeance and furious anger, those who attempt to poison and destroy my brothers.",
            captions: [{phrase: "The path of the righteous man is", startsAt: 0, endsAt: 3}, {phrase: "beset on all sides by the inequities", startsAt: 3, endsAt: 5}, {phrase: "of the selfish and the tyranny of", startsAt: 5, endsAt: 8}, {phrase: "evil men. And I will strike down", startsAt: 8, endsAt: 11}, {phrase: "upon thee with great vengeance", startsAt: 11, endsAt: 14}, {phrase: "and furious anger, those who", startsAt: 14, endsAt: 17}, {phrase: "attempt to poison and destroy my", startsAt: 17, endsAt: 19}, {phrase: "brothers.", startsAt: 19, endsAt: 20}]
        },
        {
            id: 1,
            roleId: 2,
            name: "Vincent",
            colorName: "user-blue",
            color: "#4A7CFF",
            text: "You know what they call a quarter pounder with cheese in Paris?",
            captions: [{phrase: "You know what they call a", startsAt: 26, endsAt: 27}, {phrase: "quarter pounder with cheese", startsAt: 26, endsAt: 29},{phrase: "in Paris?", startsAt: 29, endsAt: 30}]
        },
        {
            id: 2,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "What do they call it?",
            captions: [{phrase: "What do they call it?", startsAt: 30, endsAt: 31}]
        },
        {
            id: 3,
            roleId: 2,
            name: "Vincent",
            colorName: "user-blue",
            color: "#4A7CFF",
            text: "Royale with cheese.",
            captions: [{phrase: "Royale with cheese.", startsAt: 31, endsAt: 32}]
        },
        {
            id: 4,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "Royale with cheese.",
            captions: [{phrase: "Royale with cheese.", startsAt: 32, endsAt: 33}]
        },
        {
            id: 5,
            roleId: 3,
            name: "Winston",
            colorName: "user-yellow",
            color: "#FFD600",
            text: "You got a corpse in a car, minus a head in a garage. Take me to it.",
            captions: [{phrase: "You got a corpse in a car,", startsAt: 36, endsAt: 38}, {phrase: "minus a head in a garage.", startsAt: 38, endsAt: 39}, {phrase: "Take me to it.", startsAt: 39, endsAt: 40}]
        },
        {
            id: 6,
            roleId: 4,
            name: "Marsellus",
            colorName: "user-green",
            color: "#A7FE50",
            text: "Mother.",
            captions: [{phrase: "Mother.", startsAt: 40, endsAt: 41}]
        },
        {
            id: 7,
            roleId: 5,
            name: "Fabienne",
            colorName: "user-pink",
            color: "#FF71CF",
            text: "Who's Zed?",
            captions: [{phrase: "Who's Zed?", startsAt: 42, endsAt: 43}]
        },
        {
            id: 8,
            roleId: 6,
            name: "Butch",
            colorName: "user-orange",
            color: "#FFB443",
            text: "Zed's dead, baby. Get in. Zed's dead.",
            captions: [{phrase: "Zed's dead, baby.", startsAt: 43, endsAt: 44}, {phrase: "Get in. Zed's dead.", startsAt: 44, endsAt: 47},]
        },
        {
            id: 9,
            roleId: 7,
            name: "Honey",
            colorName: "user-violet",
            color: "#7749FA",
            text: "I love you, pumpkin.",
            captions: [{phrase: "I love you, pumpkin.", startsAt: 47, endsAt: 48}]
        },
        {
            id: 10,
            roleId: 8,
            name: "Lance",
            colorName: "user-cyan",
            color: "#57ECE3",
            text: "I love you, Honey Bunny. Everybody be cool. This is a robbery.",
            captions: [{phrase: "I love you, Honey Bunny.", startsAt: 48, endsAt: 49}, {phrase: "Everybody be cool.", startsAt: 49, endsAt: 50}, {phrase: "This is a robbery.", startsAt: 50, endsAt: 52}]
        },
        {
            id: 11,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "What's Fonsy like?",
            captions: [{phrase: "What's Fonsy like?", startsAt: 53, endsAt: 54}]
        },
        {
            id: 12,
            roleId: 7,
            name: "Honey",
            colorName: "user-violet",
            color: "#7749FA",
            text: "Cool.",
            captions: [{phrase: "Cool.", startsAt: 54, endsAt: 55}]
        },
        {
            id: 11,
            roleId: 1,
            name: "Jules",
            colorName: "user-red",
            color: "#FF5C5C",
            text: "Correctomundo. And that's what we're going to be. We're going to be cool.",
            captions: [{phrase: "Correctomundo. And that's", startsAt: 55, endsAt: 56}, {phrase: "what we're going to be.", startsAt: 56, endsAt: 57}, {phrase: "We're going to be cool.", startsAt: 57, endsAt: 60}]
        },
    ]

export const VideoText = ({currentTime}: videoTextProps) => {

    const [currentCaption, setCurrentCaption] = useState(0)
    const [currentRole, setCurrentRole] = useState(0)
    const [hidden, setHidden] = useState('block')

    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
    //     if (currentRole < ccPlaceholder.length) {
    //     const currentRoleCaptionsLength = ccPlaceholder[currentRole].captions.length

    //     if (currentTime > ccPlaceholder[currentRole].captions[currentCaption].endsAt) {
    //         if (currentCaption < currentRoleCaptionsLength - 1) {
    //             setCurrentCaption(prev => prev + 1)
    //         } else if (currentRole < ccPlaceholder.length - 1) {
    //             setCurrentRole(prev => prev + 1)
    //             setCurrentCaption(0)
    //         }
    //     }
    // }
   if (currentRole < ccPlaceholder.length) {
        const currentRoleCaptionsLength = ccPlaceholder[currentRole].captions.length;
        const currentCaptionStartTime = ccPlaceholder[currentRole].captions[currentCaption].startsAt;
        const currentCaptionEndTime = ccPlaceholder[currentRole].captions[currentCaption].endsAt;

        if (currentTime >= currentCaptionEndTime) {
            if (currentCaption < currentRoleCaptionsLength - 1) {
                setCurrentCaption(prev => prev + 1)
            } else {
                if (currentRole < ccPlaceholder.length - 1) {
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
                    setCurrentCaption(ccPlaceholder[currentRole - 1].captions.length - 1)
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
                <div style={{backgroundColor: `${ccPlaceholder[currentRole].color}`, display: `${hidden}` }} className='flex items-start bg-red-700 px-4 justify-center z-100'>
                    <div  ref={textRef} className={`text leading-8 w-7/8 h-fit flex`}>
                        <p>{ccPlaceholder[currentRole].captions[currentCaption].phrase}</p>
                        <div className="divider px-2"><p>|</p></div>
                        <p className=''>{currentCaption + 1}/{ccPlaceholder[currentRole].captions.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}