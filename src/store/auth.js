import axios from 'axios'
export default axios.create({
    // baseURL: "http://torresapi.azurewebsites.net",
    // baseURL: 'https://localhost:44351',
    baseURL: 'https://yzkibackend20220110222633.azurewebsites.net',
    headers: {
        "Content-type" : "application/json",
        "authapp" : "Basic:793bb6c2-4807-4805-a092-0a91d5ff62d7"
    }
})