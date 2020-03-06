import {axiosAnonymous, axiosAuthenticated} from '../axios/axios';
import {setToken} from "../sessionStorage/tokenService";

//Se connecter
const logIn = (email, password) => {
    const data = {
        email: email,
        plainPassword: password
    };

    return new Promise((resolve, reject) => {
        axiosAnonymous.post('/login', data)
            .then(response => {
                //Création du token si la requête a réussie
                if (response.status === 200) {
                    setToken(response.data.token);
                }
                resolve(response);
            })
            .catch(error => {
                reject(error)
            });
    });
};

//S'inscrire
const register = (email, username, password) => {
    const data = {
        email: email,
        username: username,
        plainPassword: password
    };

    return new Promise((resolve, reject) => {
        axiosAnonymous.post('/register', data)
            .then(response => {
                if (response.status === 200) {
                    setToken(response.data.token);
                    resolve(response);
                } else {
                    reject({response: response});
                }
            })
            .catch(error => {
                reject({user: null, error: error});
            });
    });
};

const getUserLogged = () => {
    return new Promise((resolve, reject) => {
        axiosAuthenticated.get('/users/current')
            .then(response => {
                if (response.status === 200) {
                    resolve({user: response.data});
                } else {
                    reject({
                        user: null,
                        response: response
                    });
                }
            })
            .catch(error => {
                reject({
                    user: null,
                    response: error.response
                });
            })
    });
};

export {register, logIn, getUserLogged};