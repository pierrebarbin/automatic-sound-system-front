import {axiosAuthenticated} from "../axios/axios";

const getPlaylists = () => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.get('/playlists')
            .then(response => {
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

const getPlaylist = id => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.get(`/playlists/${id}`)
            .then(response => {
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error)
            });
    });
};

export {getPlaylists, getPlaylist};