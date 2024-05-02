import { useEffect, useRef, useState } from 'react'

const txt = "Lorem ipsum dolor sit amet consectetur. Sed semper nunc in mattis urna aliquam. Donec sed suspendisse sed pharetra ut lectus nunc vel sollicitudin. Sed varius nulla urna lectus tellus condimentum vehicula pellentesque pulvinar. Natoque sed purus sagittis at vestibulum facilisi nisl."

export const VideoText = () => {
    const lineHeight: number = 32
    const [lines, setLines] = useState<number>(0)
    const [nextLine, setNextLine] = useState<number>(0)
    const [paginationProgress, setPaginationProgress] = useState<number>(1)

    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const textElement = textRef.current

        const calculateLines = () => {
            if (textElement) {
                const textHeight = textElement.offsetHeight
                const calculatedLines = textHeight / lineHeight
                setLines(calculatedLines)
            }
        }

        calculateLines()
    }, [])

    const changeLine = () => {
        if (paginationProgress < lines) {
            setPaginationProgress(paginationProgress + 1)
            setNextLine(prevLine => prevLine - lineHeight)
        } else {
            setPaginationProgress(1)
            setNextLine(0)
        }
    }

    return (
        <>
            <div className="bg-black px-4 w-full h-full flex text-white overflow-y-hidden">
                <div style={{width: `30%`}} className="progress-bar h-full bg-red-700 absolute z-0 -mx-4"></div>
                <div className='flex items-start z-100'>
                    <div style={{marginTop: nextLine}} ref={textRef} className="text leading-8 h-fit">
                        <p>{txt}</p>
                    </div>
                    <div className="paginatiotn-container flex pt-1">
                        <div className="divider px-2"><p>|</p></div>
                        <div className="pagination" onClick={changeLine}>
                            <p>1/{lines}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}