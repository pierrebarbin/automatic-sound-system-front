import Index from "../components/pages/Index.js";
import Login from "../components/pages/auth/Login.js";

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
        path: "/playlist/create",
        component: CreatePlaylist
    }
];
