"use server"

import { exec } from 'child_process'
import { NextResponse } from 'next/server'
import { join } from 'path'
import fs from 'fs'

export const videoProcess = async (video: string, audio: string) => {
    const videoPath = join(process.cwd(), 'public', 'video-no-voice', 'pulp_no_voice.mp4')
    const newAudioPath = join(process.cwd(), 'public', 'result', 'voice.mpeg')
    const originalAudioPath = join(process.cwd(), 'public', 'result', 'original_audio.mpeg')
    const combinedAudioPath = join(process.cwd(), 'public', 'result', 'combined_audio.mpeg')
    const outputPath = join(process.cwd(), 'public', 'result', 'output.mp4')

    if (fs.existsSync(outputPath)) {
        if (fs.existsSync(newAudioPath)) fs.unlink(newAudioPath, () => {})
        if (fs.existsSync(originalAudioPath)) fs.unlink(originalAudioPath, () => {})
        if (fs.existsSync(combinedAudioPath)) fs.unlink(combinedAudioPath, () => {})
    }

    const extractCommand = `ffmpeg -i ${videoPath} -q:a 0 -map a ${originalAudioPath}`
    const combineAudioCommand = `ffmpeg -i ${originalAudioPath} -i ${newAudioPath} -filter_complex amix=inputs=2:duration=first ${combinedAudioPath}`
    const combineAudioAndVideo = `ffmpeg -i ${videoPath} -i ${combinedAudioPath} -map 0:v -map 1:a -c:v copy -c:a aac -strict experimental ${outputPath}`

    try {
        
        await executeFfmpeg(extractCommand)
        console.log("Audio has been extracted successfully")

        await executeFfmpeg(combineAudioCommand)
        console.log("Audio has been combined successfully")

        await executeFfmpeg(combineAudioAndVideo)
        console.log("Audio and video has been combined successfully")

        
    } catch (err) {
        console.log("Error while processing video")
        console.log(err)
    }

    fs.unlink(newAudioPath, () => {console.log('Audio was removed')})
    fs.unlink(originalAudioPath, () => {console.log('Original Audio was removed')})
    fs.unlink(combinedAudioPath, () => {console.log('Combined audio was removed')})

    return outputPath
}

const executeFfmpeg = (command: string) => {
    return new Promise((reslove, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error)
            } else {
                reslove({ stdout, stderr })
            }
        })
    })
}