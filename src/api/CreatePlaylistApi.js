import { axios } from "../service/axios.js";

export function insert(playlist) {
    axios.post(`playlist`, playlist);
}

export function postUrl(paramListofUrl) {
    var tracks = [];
    axios.post(`tracks/youtube/playlist`, paramListofUrl).then(res => {
        tracks = res;
    });
    return tracks;
}
