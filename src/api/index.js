import axios from "axios"

export const api_key = 'f2bb7cacdb9accfade8ca0b9625d7f5d'

export const api=axios.create({
    baseURL : "https://api.themoviedb.org/3"
})