import React, {useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import {connect} from "react-redux";

const RouteWithSubRoutes = (props) => {
    const {exact, path, routes, isGranted, redirect, token} = props;
    let history = useHistory();

    useEffect(() => {
        if (!isGranted(token)) {
            history.push(redirect);
        }
    });

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

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(RouteWithSubRoutes);