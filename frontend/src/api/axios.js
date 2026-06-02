import axios from "axios"

const API = axios.create({
  baseURL: "https://shopeasy-backend-1252.onrender.com/api"
})

export default API
