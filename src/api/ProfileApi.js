import { axiosAuthenticated } from "../service/axios/axios.js";

function update(profil) {
    axiosAuthenticated.post("", profil);
    // TODO : Peut-être renvoyer un boolean si l'update a fonctionné ou échoué (pour ensuite afficher une alert)
}
function get(url) {
    var response = [];
    axiosAuthenticated.get(url).then(res => {
        response = res;
    });
    return response;
}

export function getProfile(id) {
    return get(`/users/${id}`);
}
export function getPlaylist(idUser) {
    return get(`URL_A_CHANGER${idUser}`);
}
export function getFollows(idUser) {
    return get(`URL_A_CHANGER${idUser}`);
}
export function getHistory(idUser) {
    return get(`URL_A_CHANGER${idUser}`);
}
