import axios from 'axios'

export const sendData = async (audioBlob: Blob, film: IFilm) => {
    try {
        const formData = new FormData()
        formData.append('video', film.url)
        formData.append('audio', audioBlob)

        const res = await axios.post('/api/upload', formData, {
            headers: {
                'Content-type': 'miltipart/form-data'
            }
        })
        console.log('Server response', res.data)

    } catch (err) {
        console.error("Axios error:", err)
    }
}
