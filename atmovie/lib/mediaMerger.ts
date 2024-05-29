"use server"

import { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'
import { join } from 'path'
import { createReadStream } from 'fs'
import fs from 'fs'
import path from 'path'



export const mediaMerger = (video: string, audio: File) => {
    console.log("called1")
    // saveFile(audio)
}

// const saveFile = async (file: File) => {
//     console.log("called2")
//   try {
//     const ext = 'mp3'
//     const newFilename = path.basename(file.name, '.' + ext) + '-' + Date.now() + '.' + ext
//     const newFilePath = path.join("/processing", newFilename)

//     const arrayBuffer = await file.arrayBuffer()
//     const buffer = Buffer.from(arrayBuffer)

//     fs.writeFile(newFilePath, buffer, (err) => {
//       if (err) {
//         console.error('Error writing file:', err)
//       } else {
//         console.log('File saved successfully:', newFilePath)
//       }
//     });
//   } catch (error) {
//     console.error('Error processing file:', error)
//   }
// }