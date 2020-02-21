import axiosModule from "axios";

export const axios = axiosModule.create({
    baseURL: "https://54.175.227.162/api",
    timeout: 10000
});
