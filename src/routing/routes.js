import Index from "../components/pages/Index.js";
import Login from "../components/pages/auth/Login.js";
import Profile from "../components/pages/profile/Profile.js";
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
        path: "/profile",
        component: Profile
    }
];
