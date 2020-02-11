import React, {Component} from 'react';
import { routes } from "./routes.js";
import RouteWithSubRoutes from "./RouteWithSubRoutes.js";
import {
    BrowserRouter as Router, Link,
    Switch
} from "react-router-dom";

class RouteConfig extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Index</Link>
                    <Link to="/login">Login</Link>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} route={route} />
                        ))}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RouteConfig;