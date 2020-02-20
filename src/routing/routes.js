import Index from "../components/pages/Index.js";
import Login from "../components/pages/auth/Login.js";
import Register from "../components/pages/auth/Register.js";
import CreatePlaylist from "../components/pages/createPlaylist/CreatePlaylist"

export const routes = [
    {
        path: "/",
        component: Index,
        exact: true
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/playlist/create",
        component: CreatePlaylist
    }
];
