"use client"

import Image from 'next/image'

interface ActionProps {
    callback: () => void,
    imageSrc: string,
    width?: number,
    height?: number
}

export const Action = ({imageSrc, callback, width = 51 , height = 51}: ActionProps) => {

    return (
        <>
            <button>
                <Image className='md:mr-4' src={imageSrc} width={width} height={width} alt='btn' onClick={callback}/>
            </button>
        </>
    )
}