import { axiosAuthenticated } from "../service/axios/axios.js";
import ClassementApi from "./ClassementApi.js";

export function getClassementGeneral() {
    return ClassementApi.getClassement();
}
export function getTablePlaylist() {
    var playlists = [];
    axiosAuthenticated.get("URL_A_CHANGER").then(res => (playlists = res));
    return playlists;
}
