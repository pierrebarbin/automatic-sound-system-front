import axiosModule from "axios";

import {getToken} from "../security/tokenService";

const addAuth = (config = {}) => {
    config.headers = {
        Authorization: `Bearer ${getToken()}`
    };
    return config;
};

const axiosAnonymous = axiosModule.create({
    baseURL: 'http://0.0.0.0:8001/api',
    // baseURL: 'http://54.175.227.162/api',
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
    post: (url, config = {}) => {
        return axiosAnonymous.post(url, addAuth(config));
    },
    put: (url, config = {}) => {
        return axiosAnonymous.put(url, addAuth(config));
    },
    patch: (url, config = {}) => {
        return axiosAnonymous.patch(url, addAuth(config));
    }
};

export {axiosAnonymous, axiosAuthenticated};