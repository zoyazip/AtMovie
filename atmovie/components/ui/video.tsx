import { useEffect, useRef, useState } from 'react'
import { Action } from '../action'
import { VideoProgress } from './video-progress'
import { Timer } from './timer'
import { VideoText } from './video-text'

interface VideoProps {
    film: IFilm,
    isRecording: boolean,
    isRestart: boolean,
    handleRestart: any
}


export const Video = ({film, isRecording, isRestart, handleRestart}: VideoProps) => {

    const buttonSizes = 30
    const [action, setAction] = useState('./start.svg')
    const [progressPercentage, setProgressPercentage] = useState(0)
    const [videoDuration, setVideoDuration] = useState<number>(0)

    const [isDisabled, setIsDisabled] = useState(false)

    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const current = videoRef.current

        if (current) {
            current.addEventListener('timeupdate', updateTime)
            setVideoDuration(current.duration)

            if (isRecording) {
                current.load()
                current.play()
                current.muted = true
                
                setIsDisabled(true)
                setAction('./stop.svg')

            } else {
                var playPromise = current.play()
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        current?.pause()
                    }).catch(err => {
                        console.log(err)
                    })
                }
                setAction('./start.svg')
            }

            if (isRestart) {
                var playPromise = current.play()
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        current.load()
                        current.muted = false
                        handleRestart(false)
                        setIsDisabled(false)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        }

        return () => {
            if (current) {
                current.removeEventListener('timeupdate', updateTime)
            }
        }

    }, [isRecording, isRestart, handleRestart])


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
                    <source src={film.url} type='video/mp4'/>
                </video>
                <div className='video-text absolute w-full h-8 bottom-14 px-4 md:px-6 md:bottom-20'>
                    <VideoText currentTime={videoRef.current?.currentTime || 0} film={film}/>
                </div>
                <div className={`controls absolute w-full flex items-center bottom-4 px-4 md:px-6 md:bottom-8 ${isDisabled ? 'pointer-events-none' : ''}`}>
                    <div className={`w-[${buttonSizes}px] h-[${buttonSizes}px] play flex items-center mr-4 md:mr-0`} onClick={toggleAction}>
                        <Action imageSrc={action} callback={() => {}} width={buttonSizes} height={buttonSizes}/>
                    </div>
                    <div className="progress-bar w-full flex items-center">
                        <div className="mr-4 w-32">
                            <Timer duration={videoDuration || 0} current={videoRef.current?.currentTime || 0}/>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full flex items-center">
                            <VideoProgress progress={videoRef.current?.currentTime || 0} scrub={scrub} videoDuration={videoDuration} film={film} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
