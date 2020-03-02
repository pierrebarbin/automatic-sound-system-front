const key = 'user';

const getUser = () => JSON.parse(localStorage.getItem(key));
const hasUser = () => getUser() !== null;
const setUser = user => localStorage.setItem(key, JSON.stringify(user));
const removeUser = () => localStorage.removeItem(key);

export {getUser, setUser, removeUser, hasUser};