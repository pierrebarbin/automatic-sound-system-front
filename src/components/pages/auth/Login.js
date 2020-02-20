import React, { useState} from 'react';
import {logIn} from '../../../service/loginService';
import { useHistory, Link } from "react-router-dom";

const Login = props => {
    let history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgErrors, setMsgErrors] = useState();
    const onEmailChange = event =>{
        setEmail(event.target.value );
    };
    const onPasswordChange = event =>{
        setPassword(event.target.value || '');

    };
    const LogIn= (e) =>{
        e.preventDefault();
       logIn(email, password)
       .then((response_status) => {
           //Redirection sur la page d'acceuil
            if(response_status === 200){
                history.push("/");
                props.refreshUsername();
            }
            //afficher erreur(s) d'identification
            if(response_status === 404)
                setMsgErrors("Email ou mot de passe invalide.");
       })
        
    };
        
    return (
    <div>
        <h1>Sign in</h1>
        <p style={{color: 'red'}}>{msgErrors}</p>
        <form onSubmit={LogIn}>
            <div>
        <label htmlFor="email" >Email :</label>
        <input id="email" type="email" value={email || ''} onChange={onEmailChange} required/>
        <label htmlFor="password" >Password :</label>
        <input id="password" type="password" value={password || ''} onChange={onPasswordChange} required/>
        </div>
        <button>Log In</button>
        </form>
        <div>
            <Link to="/register">Sign Up</Link>
        </div>
    </div>
    );
};

export default Login;