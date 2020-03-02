import axiosModule from "axios";

import {getToken} from "../sessionStorage/tokenService";

const addAuth = (config = {}) => {
    config.headers = {
        Authorization: `Bearer ${getToken()}`
    };
    return config;
};

const axiosAnonymous = axiosModule.create({
    // baseURL: 'http://0.0.0.0:8001/api',
    baseURL: 'http://54.175.227.162/api',
    timeout: 10000,
});

const axiosAuthenticated = {
    request: (config = {}) => {
        return axiosAnonymous.request(addAuth(config));
    },
    get: (url, config = {}) => {
        return axiosAnonymous.get(url, addAuth(config));
    },
    delete: (url, config = {}) => {
        return axiosAnonymous.delete(url, addAuth(config));
    },
    head: (url, config = {}) => {
        return axiosAnonymous.head(url, addAuth(config));
    },
    options: (url, config = {}) => {
        return axiosAnonymous.options(url, addAuth(config));
    },
    post: (url, data, config = {}) => {
        return axiosAnonymous.post(url, data, addAuth(config));
    },
    put: (url, data, config = {}) => {
        return axiosAnonymous.put(url, data, addAuth(config));
    },
    patch: (url, data, config = {}) => {
        return axiosAnonymous.patch(url, data, addAuth(config));
    }
};

export {axiosAnonymous, axiosAuthenticated};