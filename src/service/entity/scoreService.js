import {axiosAuthenticated} from "../axios/axios";

const postScore = (id, score) => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.post(`/playlists/${id}/scores`, {scoreMax: score})
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

export {postScore};