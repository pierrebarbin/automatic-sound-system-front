import {axios} from './axios.js'

//Se connecter
 const logIn= (email, password)=>{
    return new Promise(function(resolve, reject) {
        axios.post('/../login',{
            email: email,
            plainPassword: password
        })
        .then(function (response) {
            //Création du token si la requête a réussie
            if(response.status === 200){
                localStorage.setItem('login_token', JSON.stringify(response.data.token));
            }
            //retour du status
            resolve(response.status);
          })
        .catch(function (error) {
           console.log({error});
           reject(error);
        });
    });
    
}

//Se déconnecter
 const logOut= ()=>{
    localStorage.removeItem('login_token');
    /*axios.post('/logout',{
        token:localStorage.getItem('login_token')
    })
    .then(function (response) {
        //Supprimer le token si la requête a réussie
        if(response.status === 200){
                localStorage.removeItem('login_token');
            }
      })
    .catch(function (error) {
       console.log({error});
    }
    );*/
}
// Renvoit un booléen : true si un utilisateur est connecté
 const isUserLog = () =>{
    if(localStorage.getItem('login_token') !== null)
        return (true);
    return (false);
}

const getUserLog=()=>{
        return new Promise(function(resolve, reject) {
          if(isUserLog()){
            axios.get('/users/current',{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('login_token')}`
                }
            })
            .then((response)=>{
                if(response.status ===200)
                    resolve(response.data);
            })
            .catch((error)=>{
                console.log({error});
                const response={
                    status:200,
                    data:{
                        username:"HookSS"
                    }
                }
                if(response.status ===200)
                    resolve(response.data);
            })
        }
        else
            resolve("");
        });
}

export {logIn,logOut,isUserLog, getUserLog} 
