import { axios } from "../service/axios/axios.js";

export function getClassement(idPlaylist) {
    var classement = [];
    var url = "users/classement";
    if (idPlaylist !== undefined) {
        url = `${url}/playlist/${idPlaylist}`;
    }
    axios.get(url).then(res => {
        classement = res;
    });
    return classement;
}
