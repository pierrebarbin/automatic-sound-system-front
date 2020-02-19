import axios from "axios";

export const axios = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
});