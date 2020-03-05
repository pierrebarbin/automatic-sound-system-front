import { axiosAuthenticated } from "../service/axios/axios";

export function insert(playlist) {
    axiosAuthenticated.post(`/playlist`, playlist);
}

export function postUrl(paramListofUrl) {

    return new Promise((resolve, reject) => {
        axiosAuthenticated.post('/tracks/youtube/playlist?yt_playlist_id='+paramListofUrl)
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
}

export function savePlaylist(data){

    return new Promise((resolve, reject) => {
        axiosAuthenticated.post('/playlists',data)
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
}