import React from 'react';
import PropTypes from 'prop-types';
import {
    Route
} from "react-router-dom";

const RouteWithSubRoutes = route => {
    const {exact, path, routes} = route;
    return (
        <Route
            exact={exact || false}
            path={path}
            render={props => (
                <route.component
                    {...props}
                    routes={routes}
            />)}
        />
    );
};

export default RouteWithSubRoutes;