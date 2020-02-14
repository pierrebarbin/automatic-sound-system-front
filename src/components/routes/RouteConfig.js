import React from 'react';
import { routes } from "../../routing/routes.js";
import RouteWithSubRoutes from "./RouteWithSubRoutes.js";
import {
    Switch,
} from "react-router-dom";

const RouteConfig = () => {
    return (
        <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
        </Switch>
    );
};

export default RouteConfig;