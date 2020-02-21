import { axios } from "../service/axios.js";

export function update(profil) {
    axios.post("", profil);
    // TODO : Peut-être renvoyer un boolean si l'update a fonctionné ou échoué (pour ensuite afficher une alert)
}
function get(url) {
    var response = [];
    axios.get(url).then(res => (response = res));
    return response;
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
