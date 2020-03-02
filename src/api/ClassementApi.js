import { axiosAuthenticated } from "../service/axios/axios.js";

export function getClassement(idPlaylist) {
    var classement = [];
    var url = "/users/classement";
    if (idPlaylist !== undefined) {
        url = `${url}/playlist/${idPlaylist}`;
    }
    axiosAuthenticated.get(url).then(res => {
        classement = res;
    });
    return classement;
}
