import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";

const TheHeader = props => {
    return (
        <div className="w-full p-4 fixed">
            <div className="box flex items-center h-16 box-border">
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </div>
    );
};

TheHeader.propTypes = {

};

export default TheHeader;