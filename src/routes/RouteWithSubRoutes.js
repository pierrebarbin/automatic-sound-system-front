import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Route
} from "react-router-dom";

class RouteWithSubRoutes extends Component {
    render() {
        const route = this.props.route;
        return (
            <Route
                path={route.path}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );
    }
}

RouteWithSubRoutes.propTypes = {
    route: PropTypes.object.isRequired
};

export default RouteWithSubRoutes;