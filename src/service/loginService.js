import {axios} from './axios'
import { useState } from 'react';

export const logIn= (email, password)=>{
    axios.post('/login',{
        email: email,
        password: password
    })
    .then(function (response) {
        //code qui se trouve pour l'instant dans catch
      })
    .catch(function (error) {
       //console.log({error});
    
       //simuler une réponse tant que API non correct
       const response = {
           status:200,
           statusText: "Ok",
           data:{
               token: "EKJR5E8854GD5"
           }
       }
       if(response.status === 200){
        //se loger
            localStorage.setItem('login_token', JSON.stringify(response.data.token));
        }
    }
    );
}

export const logOut= ()=>{

    axios.post('/logout',{
        token:localStorage.getItem('login_token')
    })
    .then(function (response) {
        //code qui se trouve pour l'instant dans catch
      })
    .catch(function (error) {
       //console.log({error});
    
       //simuler une réponse tant que API non correct
       const response = {
           status:200,
           statusText: "Ok"
       }
       if(response.status === 200){
        //se loger
            localStorage.removeItem('login_token');
        }
    }
    );
}
export const isUserLog = () =>{
    if(localStorage.getItem('login_token') !== "")
        return (true);
    return (false);
}
