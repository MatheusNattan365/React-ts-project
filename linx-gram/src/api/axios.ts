import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:5287',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})