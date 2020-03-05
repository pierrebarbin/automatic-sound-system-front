import React from "react";

// pour le timer voir https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks


const Error404 = props => {
    //region html
    return (
        <div>
            <h1>Oups ! Impossible d'accèder à votre demande</h1>
            <p>La page que vous demandez est introuvable...</p>
        </div>
    );
    //endregion
};

export default Error404;