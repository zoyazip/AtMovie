import { readFile } from 'fs/promises'
import path from 'path'
import fs from 'fs'

let attempTimes: number = 0

export async function GET() {
  try {
    const outputPath = path.join(process.cwd(), 'public', 'result', 'output.mp4')

    // Check if file exists before deletion attempt
    if (fs.existsSync(outputPath)) {
      const buffer = await readFile(outputPath)

      const headers = new Headers()
      headers.append("Content-Disposition", 'attachment; filename="output.mp4"')
      headers.append("Content-Type", "video/mp4")

      attempTimes = 0
      return new Response(buffer, { headers })
    } else {
      console.log('Output file not found. Checking again in 4 seconds...')
      attempTimes++
      if (attempTimes < 3) {
        await new Promise(resolve => setTimeout(resolve, 4000))
        return GET()
      } else {
        return new Response("Could not process ")
      }
      
    }
  } catch (err) {
    console.error(err)
  }
}
