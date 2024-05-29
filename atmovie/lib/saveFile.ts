import fs from 'fs'
import { join } from 'path'


export const saveAudio = async (data: Blob) => {
  console.log(data)
  try {
    const buffer = Buffer.from(await data.arrayBuffer())
    const filePath = join(process.cwd(), 'public', 'result', `voice.mpeg`)

    fs.writeFileSync(filePath, buffer)
    console.log('File has been created')
  } catch (err) {
    console.log(err)
  }
}