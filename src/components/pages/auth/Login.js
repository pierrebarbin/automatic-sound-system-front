import React, {useState} from 'react';
import {Link} from "react-router-dom";
import SVG from "react-inlinesvg";
import {useTranslation} from "react-i18next";
import LoginIllustration from "../../../assets/illustrations/undraw/undraw_authentication_fsn5.svg";
import {logIn} from '../../../service/entity/userService';
import {connect} from "react-redux";
import {error, success} from "../../../model/Message/types";
import {dispatchAddMessage} from "../../../actions/message";
import {dispatchAddToken} from "../../../actions/token";

const Login = ({addMessage, addToken}) => {
    const {t} = useTranslation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onEmailChange = event => {
        setEmail(event.target.value);
    };
    const onPasswordChange = event => {
        setPassword(event.target.value || '');
    };
    const onSubmit = e => {
        e.preventDefault();

        logIn(email, password)
            .then(response => {
                if (response.status === 200) {
                    addToken(response.data.token);
                    addMessage("Bienvenue sur Musicass !", success);
                }
            })
            .catch(requestError => {
                //afficher erreur(s) d'identification
                if (requestError !== undefined && requestError.response !== undefined) {
                    if (requestError.response.status === 401) {
                        addMessage(requestError.response.data.message, error);
                    }
                }
            })
        ;
    };

    return (
        <div className="screen-without-header flex items-center justify-center">
            <div className="bg-gray-900 p-4 shadow-lg rounded-lg flex">
                <div className=" px-10 py-4">
                    <h1 className="text-4xl font-semibold">
                        {t('login.login')}
                    </h1>
                    <form onSubmit={onSubmit} className="mt-4">
                        <div>
                            <div>
                                <label htmlFor="email"> {t('login.inputs.email')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="email"
                                    type="email"
                                    value={email || ''}
                                    onChange={onEmailChange}
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password"> {t('login.inputs.password')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="password"
                                    type="password"
                                    value={password || ''}
                                    onChange={onPasswordChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <Link
                                className="text-gray-400 hover:text-gray-500 text-sm"
                                to="/register"
                            >
                                {t('login.forgot_password')}
                            </Link>
                        </div>
                        <div className="flex justify-around mt-2">
                            <button
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline "
                                type="submit"
                            >
                                {t('login.login')}
                            </button>
                            <Link
                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline"
                                to="/register"
                            >
                                {t('login.signup')}
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center p-4">
                    <SVG
                        className="h-48"
                        src={LoginIllustration}
                        title={t('login.login')}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};
const mapDispatchsToProps = dispatch => {
    const props = dispatchAddMessage(dispatch);

    dispatchAddToken(dispatch, props);

    return props;
};

export default connect(mapStateToProps, mapDispatchsToProps)(Login);