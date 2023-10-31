import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://suxodusjhnidzojbvjsj.supabase.co/rest/v1',
    headers: {
        apikey: "apikey",
        authorization: "Authorization"
    }
})