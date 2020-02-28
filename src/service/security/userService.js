import {axiosAnonymous, axiosAuthenticated} from '../axios/axios';
import {hasToken, removeToken, setToken} from "./tokenService";

//Se connecter
const logIn = (email, password) => {
    return new Promise((resolve, reject) => {
        const data = {
            email: email,
            plainPassword: password
        };

        axiosAnonymous.post('/login', data)
            .then(response => {
                //Création du token si la requête a réussie
                if (response.status === 200) {
                    setToken(response.data.token);
                }
                //retour du status
                resolve(response.status);
            })
            .catch(error => {
                console.log({error});
                reject(error);
            });
    });
};

//S'inscrire
const register = (email, username, password) => {
    return new Promise((resolve, reject) => {
        axiosAnonymous.post('/register', {
            email: email,
            username: username,
            plainPassword: password
        })
            .then(response => {
                if (response.status === 200) {
                    setToken(response.data.token);
                }
                resolve(response.status);
            })
            .catch(error => {
                console.log({error});
                reject(error);
            });
    });
};

//Se déconnecter
const logOut = () => {
    removeToken();
};

const isUserLogged = () => hasToken();

const getUserLogged = () => {
    return new Promise(resolve => {
        if (isUserLogged()) {
            axiosAuthenticated.get('/users/current')
                .then(response => {
                    if (response.status === 200)
                        resolve(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    });
};

export {register, logIn, logOut, isUserLogged, getUserLogged};