"use client"

import { useState, useEffect } from 'react'

import { Action } from './action'
import { ActionsBlock } from './actions-block'
import { CCBlock } from './cc-block'
import { RoleList } from './role-list'
import { SelectScrollable } from './ui/select-scrollable'
import { Video } from './ui/video'
import { PulpFiction } from '@/lib/PulpFiction'

import { useRecorder } from 'react-microphone-recorder'
import { sendData } from '@/lib/sendData'
import { clearData } from '@/app/api/restart/route'

const Films: IFilm[] = [
    PulpFiction,
]

export const MainPage = () => {
    const [isRecording, setIsRecording] = useState(false) 
    const [recordingIcon, setRecordingIcon] = useState('./record.svg')
    const [isRestart, setIsRestart] = useState(false)
    const [isDownload, setIsDownload] = useState(false)

    const [recordIsDisabled, setRecordIsDisabled] = useState(false)
    const [restartIsDisabled, setRestartIsDisabled] = useState(true)
    const [downloadIsDisabled, setDownloadIsDisabled] = useState(true)

    const { startRecording, stopRecording, resetRecording, audioURL, audioFile, audioBlob } = useRecorder()

    useEffect(() => {
        if (!audioFile) return

        if (audioBlob && isDownload) {
            sendData(audioBlob, Films[0])
        }
        
    }, [audioFile, audioBlob, isDownload])

    const toggleRecording = () => {

        setRecordingIcon('./stop_recording.svg')
        if (isRecording) {
            stopRecording()
            setDownloadIsDisabled(false)
            setRecordIsDisabled(true)
            setRestartIsDisabled(false)
        } else {
            resetRecording
            startRecording()
            setIsDownload(false)
        }

        setIsRecording(!isRecording)
        setRecordingIcon(!isRecording ? './stop.svg' : './record.svg')
    }

    const restartRecording = () => {
        setIsRestart(!isRestart)
        clearData()
        setRecordIsDisabled(false)
        setRestartIsDisabled(true)
        setDownloadIsDisabled(true)
        setIsDownload(false)
    }

    const toggleDownload = () => {
        setIsDownload(true)
    }


    return (
        <>
            <div className="w-svw h-svh z-40 flex flex-col">
                <div className="w-full h-fit bg-radial-bg flex justify-center">
                    <div className="video md:w-6/12">
                        <Video film={Films[0]} isRecording={isRecording} isRestart={isRestart} handleRestart={setIsRestart}/>
                    </div>
                </div>
                <div className="actionZone h-full flex flex-col px-4 py-4 overflow-y-hidden md:px-12 md:py-8 md:flex-row md:items-start">
                        <div className="cc-zone h-1/2 md:h-full md:w-3/5">
                            <CCBlock film={Films[0]}/>
                        </div>
                        <div className="user-controllers justify-between flex flex-col pt-4 h-full md:pt-0 md:w-2/5 md:pl-4">
                            <div className="">
                                <SelectScrollable films={Films}/>
                                <RoleList cast={Films[0].cast}/>
                            </div>
                            <div className="flex justify-around pb-4 md:pb-0 md:justify-normal">
                                <ActionsBlock>
                                    <div style={{pointerEvents: `${recordIsDisabled ? 'none' : 'auto'}`}} onClick={toggleRecording}><Action imageSrc={`${recordIsDisabled ? './record_disabled.svg' : recordingIcon}`} callback={() => {}}/></div>
                                    <div style={{pointerEvents: `${restartIsDisabled ? 'none' : 'auto'}`}} onClick={restartRecording}><Action imageSrc={`${restartIsDisabled ? './restart_disabled.svg' : './restart.svg'}`} callback={() => {}}/></div>
                                    <div style={{pointerEvents: `${downloadIsDisabled ? 'none' : 'auto'}`}}><a href='/api/download' download onClick={toggleDownload}><Action imageSrc={`${downloadIsDisabled ? './download_disabled.svg' : './download.svg'}`} callback={() => {}}/></a></div>
                                </ActionsBlock>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}