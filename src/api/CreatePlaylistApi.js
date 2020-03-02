import { axiosAuthenticated } from "../service/axios/axios";

export function insert(playlist) {
    axiosAuthenticated.post(`/playlist`, playlist);
}

export function postUrl(paramListofUrl) {
    var tracks = [];
    axiosAuthenticated.post(`/tracks/youtube/playlist`, paramListofUrl).then(res => {
        tracks = res;
    });
    return tracks;
}
