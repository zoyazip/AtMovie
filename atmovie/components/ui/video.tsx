import { useEffect, useRef, useState } from 'react'
import { Action } from '../action'
import { VideoProgress } from './video-progress'
import { Timer } from './timer'
import { VideoText } from './video-text'

export const Video = () => {

    const buttonSizes = 30
    const [action, setAction] = useState('./start.svg')
    const [progressPercentage, setProgressPercentage] = useState(0)
    const [videoDuration, setVideoDuration] = useState<number>(0)

    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const current = videoRef.current

        if (current) {
            current.addEventListener('timeupdate', updateTime)
            setVideoDuration(current.duration)
        }

        return () => {
            if (current) {
                current.removeEventListener('timeupdate', updateTime)
            }
        }
    }, [])


    const updateTime = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime
            const duration = videoRef.current.duration
            const percentage = (currentTime / duration) * 100
            setProgressPercentage(percentage)
        }
    }

    const toggleAction = () => {
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play()
            setAction('./stop.svg')
        } else if (videoRef.current) {
            videoRef.current.pause()
            setAction('./start.svg')
        }
    }

    const scrub = (value: number) => {
        setProgressPercentage(value)
        if (videoRef.current) videoRef.current.currentTime = value
        
    }

    return (
        <div className=''>
            <div className="relative">
                <video ref={videoRef} width={"100%"} height={"100%"} playsInline >
                    <source src='/video/pulp.mp4' type='video/mp4'/>
                    <track kind="captions" src="/video/pulp.vtt" srcLang="en" default />
                </video>
                <div className='video-text absolute w-full h-8 bottom-14 px-4 md:px-6 md:bottom-20'>
                    <VideoText currentTime={videoRef.current?.currentTime || 0}/>
                </div>
                <div className="controls absolute w-full flex items-center bottom-4 px-4 md:px-6 md:bottom-8">
                    <div className={`w-[${buttonSizes}px] h-[${buttonSizes}px] play flex items-center mr-4 md:mr-0`} onClick={toggleAction}>
                        <Action imageSrc={action} callback={() => console.log("start")} width={buttonSizes} height={buttonSizes}/>
                    </div>
                    <div className="progress-bar w-full flex items-center">
                        <div className="mr-4 w-32">
                            <Timer duration={videoDuration || 0} current={videoRef.current?.currentTime || 0}/>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full flex items-center">
                            <VideoProgress progress={videoRef.current?.currentTime || 0} scrub={scrub} videoDuration={videoDuration}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
