import React from 'react';
import {Route, useHistory} from "react-router-dom";

const RouteWithSubRoutes = (props) => {
    const {exact, path, routes, isGranted, redirect} = props;
    let history = useHistory();

    if (!isGranted(props)) {
        history.push(redirect);
    }

    return (
        <Route
            exact={exact || false}
            path={path}
            render={routeProps => (
                <props.component
                    {...props}
                    {...routeProps}
                    routes={routes}
                />)}
        />
    );
};

export default RouteWithSubRoutes;