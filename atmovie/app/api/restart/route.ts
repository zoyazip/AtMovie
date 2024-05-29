"use server"

import fs from 'fs'
import path from 'path'

export const clearData = () => {
    const dir = path.join(process.cwd(), 'public', 'result')

    fs.readdir(dir, (err, files) => {
        if (err) throw err
        for (const file of files) {
            fs.unlink(path.join(dir, file), err => {
                if (err) throw err
            })
        }
    })
}