
import axios from 'axios'

export const downloadResult = async () => {
    try {
        const res = await axios.get('/api/download')
        console.log('Server response', res.data)

    } catch (err) {
        console.error("Axios error:", err)
    }
}

