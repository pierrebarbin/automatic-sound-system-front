import React, {useEffect, useState} from 'react';
import RouteConfig from "./routes/RouteConfig";
import TheHeader from "./common/TheHeader";
import {BrowserRouter as Router} from "react-router-dom";
import TheRightSidePanel from "./common/TheRightSidePanel";
import {getUserLogged} from "../service/entity/userService";
import Toaster from "./toast/Toaster";
import {connect} from "react-redux";
import {dispatchAddAuthenticatedUser} from "../actions/authenticatedUser";
import {dispatchDeleteToken} from "../actions/token";
import {removeToken} from "../service/sessionStorage/tokenService";

const App = ({token, user, addAuthenticatedUser, deleteToken}) => {
    useEffect(() => {
        if (token !== null && user === null) {
            getUserLogged()
                .then(data => {
                    addAuthenticatedUser(data.user);
                })
                .catch(data => {
                    deleteToken();
                    removeToken();
                    console.error(data);
                });
        }
    });

    return (
        <div className="bg-gray-800 text-gray-500 min-h-full">
            <Router>
                <TheHeader/>
                <div className="w-4/5 pt-24 px-4">
                    <RouteConfig/>
                </div>
                {(token === null) ? '' : (
                    <div>
                        <Toaster/>
                        <TheRightSidePanel/>
                    </div>
                )
                }
            </Router>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.authenticatedUser
    };
};

const mapDispatchsToProps = dispatch => {
    const props = dispatchAddAuthenticatedUser(dispatch);

    dispatchDeleteToken(dispatch, props);

    return props;
};

export default connect(mapStateToProps, mapDispatchsToProps)(App);
