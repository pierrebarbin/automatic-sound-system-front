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
import {loadChats, loadLastChats} from "../service/entity/chatService";
import {dispatchAddChats} from "../actions/chat";

const App = ({token, user, addAuthenticatedUser, deleteToken, chats, addChats}) => {
    const [reload, setReload] = useState(null);

    const loadMessages = () => {
        if (token !== null) {
            const promise = (chats.length < 1)
                ? loadChats()
                : loadLastChats(chats[chats.length - 1].createdAt);

            // Ajoute les derniers chats depuis le dernier load ou tous les chats si il n'y en a pas
            promise
                .then(response => {
                    if (response.data.length > 0) {
                        addChats([...response.data]);
                    }
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                });

            setTimeout(() => {
                setReload((+ new Date()))
            }, 3000);
        }
    };

    useEffect(() => {
        if (token !== null && user === null) {
            getUserLogged()
                .then(data => {
                    addAuthenticatedUser(data.user);
                    setReload((+ new Date()));
                })
                .catch(data => {
                    deleteToken();
                    removeToken();
                    console.error(data);
                });
        }
    });

    useEffect(() => {
        if (reload !== null) {
            loadMessages();
        }
    }, [reload]);

    return (
        <div className="bg-gray-800 text-gray-500 min-h-full">
            <Router>
                <TheHeader/>
                <div className="w-4/5 pt-24 px-4">
                    <RouteConfig/>
                </div>
                <div>
                    <Toaster/>
                    {(token === null) ? '' : <TheRightSidePanel chats={chats}/>}
                </div>
            </Router>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        chats: state.chats,
        token: state.token,
        user: state.authenticatedUser
    };
};

const mapDispatchsToProps = dispatch => {
    const props = dispatchAddAuthenticatedUser(dispatch);

    dispatchDeleteToken(dispatch, props);
    dispatchAddChats(dispatch, props);

    return props;
};

export default connect(mapStateToProps, mapDispatchsToProps)(App);
