"use client"

import Image from 'next/image'

interface ActionProps {
    callback: () => void,
    imageSrc: string
}

export const Action = ({imageSrc, callback}: ActionProps) => {

    return (
        <>
            <button>
                <Image className='md:mr-4' src={imageSrc} width={57} height={57} alt='btn' onClick={callback}/>
            </button>
        </>
    )
}