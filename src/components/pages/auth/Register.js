import React, { useState} from 'react';
import {axios} from '../../../service/axios.js';
import {Link, useHistory} from "react-router-dom";
import {logIn} from '../../../service/loginService';
import SVG from "react-inlinesvg";
import RegisterIllustration from "../../../assets/illustrations/undraw/undraw_sign_in_e6hj.svg";
import {useTranslation} from "react-i18next";

const Register = props => {
    const { t } = useTranslation();

    const {refreshUsername} = props.refreshUsername;
    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const onEmailChange = event =>{
        setEmail(event.target.value );
    };
    const onPasswordChange = event =>{
        setPassword(event.target.value || '');
    };
    const onPasswordMatchChange = event =>{
        if(event.target.value !== password)
            event.target.setCustomValidity("Les mots de passe doivent être identiques.");
        else
            event.target.setCustomValidity("");
    };
    const onUsernameChange = event =>{
        setUsername(event.target.value || '');

    };
    const SignUp= (e) =>{
        e.preventDefault();
        axios.post('/register',{
            email: email,
            username: username,
            plainPassword: password
        })
        .then(function (response) {
            if(response.status === 200){
                    logIn(email, password)
                    .then((response_status) => {
                        //Redirection sur la page d'acceuil
                         if(response_status === 200){
                            history.push("/");
                            props.refreshUsername();
                         }
                    })
                }
          })
        .catch(function (error) {
           console.log({error});
        }
        );
    };
    return (
        <div className="screen-without-header flex items-center justify-center">
            <div className="bg-gray-900 p-4 shadow-lg rounded-lg flex">
                <div className=" px-10 py-4">
                    <h1 className="text-4xl font-semibold">
                        {t('register.register')}
                    </h1>
                    <form onSubmit={SignUp} className="mt-4">
                        <div>
                            <div>
                                <label htmlFor="email" > {t('register.inputs.email')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="email"
                                    type="email"
                                    value={email || ''}
                                    onChange={onEmailChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="username" > {t('register.inputs.login')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="username"
                                    type="email"
                                    value={email || ''}
                                    onChange={onUsernameChange}
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" > {t('register.inputs.password')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="password"
                                    type="password"
                                    value={password || ''}
                                    onChange={onPasswordChange}
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password_match" > {t('register.inputs.confirm_password')}</label>
                                <input
                                    className="block bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline placeholder-gray-400 w-64"
                                    id="password_match"
                                    type="password"
                                    value={password || ''}
                                    onChange={onPasswordMatchChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-around mt-2">
                            <button
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline "
                                type="submit"
                            >
                                {t('register.register')}
                            </button>
                            <Link
                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline"
                                to="/login"
                            >
                                {t('register.login')}
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center p-4">
                    <SVG
                        className="h-48"
                        src={RegisterIllustration}
                        title={t('register.register')}
                    />
                </div>
            </div>
        </div>
        );
}

export default Register