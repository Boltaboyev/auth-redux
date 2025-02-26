import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

const my_axios = axios.create({
    baseURL: url,
})

export default my_axios