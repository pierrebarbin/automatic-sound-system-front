import Index from "../pages/Index.js";
import Login from "../pages/auth/Login.js";

export const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/login",
        component: Login
    }
];