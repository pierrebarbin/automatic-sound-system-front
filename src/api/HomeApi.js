import { axios } from "../service/axios.js";
import ClassementApi from "./ClassementApi.js";

export function getClassementGeneral() {
    return ClassementApi.getClassement();
}
export function getTablePlaylist() {
    var playlists = [];
    axios.get("URL_A_CHANGER").then(res => (playlists = res));
    return playlists;
}
