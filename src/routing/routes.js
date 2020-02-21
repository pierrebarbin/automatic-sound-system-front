import Index from "../components/pages/Index.js";
import Login from "../components/pages/auth/Login.js";
import Register from "../components/pages/auth/Register.js";
import CreatePlaylist from "../components/pages/createPlaylist/CreatePlaylist";
import Profile from "../components/pages/profile/Profile.js";
import Gameplay from "../components/pages/gameplay/gameplay.js";

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
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/play",
        component: Gameplay
    }
];
