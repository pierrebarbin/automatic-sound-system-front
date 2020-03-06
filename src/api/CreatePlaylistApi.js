import {axiosAuthenticated} from "../service/axios/axios";

const insert = playlist => {
    axiosAuthenticated.post(`/playlist`, playlist);
};

const postUrl = paramListofUrl => {

    return new Promise((resolve, reject) => {
        axiosAuthenticated.post('/tracks/youtube/playlist?yt_playlist_id=' + paramListofUrl)
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

const savePlaylist = data => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.post('/playlists', data)
            .then(response => {
                if (response.status === 201) {
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

export {insert, postUrl, savePlaylist};