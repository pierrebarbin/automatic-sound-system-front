import {axiosAuthenticated} from "../axios/axios";

const postChat = message => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.post('/chats', {message: message})
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

const loadChats = () => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.get('/chats/load')
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

const loadLastChats = (lastCreatedAt) => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.get('/chats/load', {
            params: {
                after: lastCreatedAt
            }
        })
            .then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

export {postChat, loadChats, loadLastChats};