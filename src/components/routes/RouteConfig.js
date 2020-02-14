import React from 'react';
import { routes } from "../../routing/routes.js";
import RouteWithSubRoutes from "./RouteWithSubRoutes.js";
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";

const RouteConfig = () => {
    return (
        <Router>
            <Link to="/">Index</Link>
            <Link to="/login">Login</Link>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </Router>
    );
};

export default RouteConfig;