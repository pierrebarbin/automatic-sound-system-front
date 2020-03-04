import Index from "../components/pages/Index.js";
import Login from "../components/pages/auth/Login.js";
import Register from "../components/pages/auth/Register.js";
import CreatePlaylist from "../components/pages/createPlaylist/CreatePlaylist";
import Profile from "../components/pages/profile/Profile.js";
import Gameplay from "../components/pages/gameplay/gameplay.js";


const isAuthenticated = token => token !== null;
const isAnonymous = token => token === null;

export const routes = [
    {
        path: "/",
        component: Index,
        exact: true,
        isGranted: isAuthenticated,
        redirect: "/login"
    },
    {
        path: "/login",
        component: Login,
        isGranted: isAnonymous,
        redirect: "/"
    },
    {
        path: "/register",
        component: Register,
        isGranted: isAnonymous,
        redirect: "/"
    },
    {
        path: "/playlist/create",
        component: CreatePlaylist,
        isGranted: isAuthenticated,
        redirect: "/login"
    },
    {
        path: "/profile",
        component: Profile,
        isGranted: isAuthenticated,
        redirect: "/login"
    },
    {
        path: "/play",
        component: Gameplay,
        isGranted: isAuthenticated,
        redirect: "/login"
    }
];
