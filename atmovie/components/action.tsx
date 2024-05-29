"use client"

import Image from 'next/image'

interface ActionProps {
    callback?: () => void,
    imageSrc: string,
    width?: number,
    height?: number
}

export const Action = ({imageSrc, callback, width = 51}: ActionProps) => {

    return (
        <>
            <button>
                <Image className='md:mr-4 hover:scale-110 transition-all' src={imageSrc} width={width} height={width} alt='btn' onClick={callback}/>
            </button>
        </>
    )
}