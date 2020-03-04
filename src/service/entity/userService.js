import {axiosAnonymous, axiosAuthenticated} from '../axios/axios';
import {hasToken, removeToken, setToken} from "../sessionStorage/tokenService";
import {hasUser, setUser,removeUser} from "../sessionStorage/userService";

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
    removeUser();
};

const isUserLogged = () => hasToken() && hasUser();

const getUserLogged = () => {
    return new Promise(resolve => {
        if (hasToken()) {
            axiosAuthenticated.get('/users/current')
                .then(response => {
                    if (response.status === 200) {
                        setUser(response.data);
                        resolve({user: response.data});
                    } else {
                        removeToken();
                        resolve({user: null});
                    }
                })
                .catch(error => {
                    removeToken();

                    resolve({
                        user: null,
                        error: error
                    });
                })
        } else {
            removeToken();

            resolve({user: null});
        }
    });
};

export {register, logIn, logOut, isUserLogged, getUserLogged};