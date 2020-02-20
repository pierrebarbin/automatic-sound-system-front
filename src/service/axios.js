import axiosModule from "axios";

export const axios = axiosModule.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 100,
});