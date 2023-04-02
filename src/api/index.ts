import axios from "axios"

export let url = "http://localhost:5000/"

const $host = axios.create({
  baseURL: url,
})

export { $host }
