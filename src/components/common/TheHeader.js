import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import HomeIcon from '../../assets/icons/zondicons/home.svg';
import LoginIcon from '../../assets/icons/entypo/login.svg';
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";
import { logOut} from '../../service/loginService';


const TheHeader = props => {
    const { t } = useTranslation();
    const {username} = props;
    const LogOut = () =>{
        logOut();
        props.refreshUsername();
        
    }
    return (
        <div className="w-full p-4 fixed z-50">
            <div className="box h-16 flex items-center box-border">
                <nav className="flex justify-between items-center w-full">
                    <div>
                        <Link
                            to="/"
                            className="block p-2 bg-gray-800 rounded-full hover:shadow-lg"
                        >
                            <SVG
                                src={HomeIcon}
                                className="h-5 h-5 fill-current"
                                title={t('global.header.home')}
                            />
                        </Link>
                    </div>
                    
                    <div>{username}</div>
                    <div>
                        <Link
                            to="/login"
                            className="block p-2 bg-gray-800 rounded-full hover:shadow-lg "
                            onClick={()=>LogOut()} 
                        >
                            <SVG
                                src={LoginIcon}
                                className="h-5 h-5 fill-current"
                                title={t('global.header.login')}
                            />
                        </Link>
                        </div>
                </nav>
            </div>
        </div>
    );
};

TheHeader.propTypes = {

};

export default TheHeader;