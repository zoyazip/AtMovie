"use server"

import { NextResponse } from 'next/server'
import { saveAudio } from '@/lib/saveFile'
import { videoProcess } from '../videoProcess'

export async function POST(req: Request) {
  
  try {

    const formData = await req.formData()
    const video = formData.get('video')
    const audio = formData.get('audio')

    if (!video || !audio) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 })
    }

    console.log(audio)
    saveAudio(audio as Blob)
    videoProcess("pulp_no_voice", "voice")

    return NextResponse.json({ echo: `Video: ${video}, Audio: ${audio}` }, { status: 200 })

  } catch (err) {
    console.error("Error processing request:", err)
    return NextResponse.json({ error: 'Error processing request', details: err }, { status: 500 })
  }
}
