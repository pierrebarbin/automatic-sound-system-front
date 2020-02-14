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

RouteWithSubRoutes.propTypes = {
    router: PropTypes.object.isRequired
};

export default RouteWithSubRoutes;