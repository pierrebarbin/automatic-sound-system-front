import React, { useState} from 'react';
import {axios} from '../../../service/axios.js';
import { useHistory} from "react-router-dom";
import {logIn} from '../../../service/loginService';

const Register = props => {
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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={SignUp}>
                <div>
                    <label htmlFor="email" >Email :</label>
                    <input id="email" type="email" value={email || ''} onChange={onEmailChange} required/>
                    <label htmlFor="username" >Username :</label>
                    <input id="username" type="text" value={username || ''} onChange={onUsernameChange} required/>
                </div>
                <div>
                    <label htmlFor="password" >Password :</label>
                    <input id="password" type="password" value={password || ''} onChange={onPasswordChange} required/>
                    <label htmlFor="password_match" >Repeat password :</label>
                    <input id="password_match" type="password" required pattern={password|| ''} onChange={onPasswordMatchChange} />
                </div>
                <button>Register</button>
            </form>
        </div>
        );
}

export default Register