import { axios } from "../service/axios/axios.js";
import ClassementApi from "./ClassementApi.js";

export function getClassementPlaylist(id) {
    return ClassementApi.getClassement(id);
}
export function getPlaylist(id) {
    var music = [];
    axios.get(`playlists/${id}`).then(res => {
        res = music;
    });
    return music;
}

export function postScore(score) {
    axios.post("URL_A_CHANGER", score);
    //TODO : Peut-être renvoyer un bool pour dire que c'est réussi ou non.
}
