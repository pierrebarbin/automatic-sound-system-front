import React, { useState, Redirect } from 'react';
import {logIn, isUserLog} from '../../../service/loginService'
import { useHistory } from "react-router-dom";

const Login = () => {
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
    const LogIn= () =>{
        const res = logIn(email, password);
        //if(res === 200)
        if(isUserLog())
            history.push("/");
        //if(res === 404)
        else
            setMsgErrors("Email ou mot de passe invalide.");
    };
        
    return (
    <div>
        <h1>Log In</h1>
        <p style={{color: 'red'}}>{msgErrors}</p>
        <form>
            <div>
        <label htmlFor="email" >Email :</label>
        <input id="email" type="text" value={email || ''} onChange={onEmailChange}/>
        <label htmlFor="password" >Password :</label>
        <input id="password" type="password" value={password || ''} onChange={onPasswordChange}/>
        </div>
        <button type="button" onClick={() => LogIn()}>Log In</button>
        </form>
    </div>
    );
};

export default Login;