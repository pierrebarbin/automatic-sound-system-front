const key = 'login_token';

const getToken = () => localStorage.getItem(key);
const hasToken = () => getToken() !== null;
const setToken = token => localStorage.setItem(key, token);
const removeToken = () => localStorage.removeItem(key);

export {getToken, setToken, removeToken, hasToken};