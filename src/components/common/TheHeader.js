import React from 'react';
import SVG from 'react-inlinesvg';
import HomeIcon from '../../assets/icons/zondicons/home.svg';
import MusicNoteIcon from '../../assets/icons/zondicons/music-notes.svg';
import Badge from '../../assets/icons/zondicons/badge.svg';
import LogoutIcon from '../../assets/icons/entypo/log-out.svg';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {dispatchDeleteToken} from "../../actions/token";
import {removeToken} from "../../service/sessionStorage/tokenService";

const TheHeader = ({user, deleteToken}) => {
    const {t} = useTranslation();
    const onLogOut = () => {
        removeToken();
        deleteToken();
    };

    return (
        <div className="w-full p-4 fixed z-50">
            <div className="box h-16 flex items-center box-border">
                <nav className="flex justify-between items-center w-full">
                    <div className="inline-flex">
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

                        <Link
                            to="/playlist/create"
                            className="inline-flex block p-2 ml-2 bg-gray-800 rounded-full hover:shadow-lg"
                        >
                            <SVG
                                src={MusicNoteIcon}
                                className="h-5 h-5 fill-current"
                                title={t('playlist.create')}
                            />
                            <span className="ml-2">{t('playlist.create')}</span>
                        </Link>
                    </div>

                    <div>
                        {(user !== null)
                            ? (
                                <div className="inline-flex">
                                    <Link
                                        className="flex-1 block p-2 mr-2 bg-gray-800 rounded-full hover:shadow-lg "
                                        to="/profile"
                                    >
                                        <SVG
                                            src={Badge}
                                            className="h-5 h-5 fill-current"
                                            title="profile"
                                        />
                                    </Link>
                                    <button
                                        className="flex-1 block p-2 mr-2 bg-gray-800 rounded-full hover:shadow-lg "
                                        onClick={() => onLogOut()}
                                    >
                                        <SVG
                                            src={LogoutIcon}
                                            className="h-5 h-5 fill-current"
                                            title={t('global.header.logout')}
                                        />
                                    </button>
                                </div>)
                            : ("")
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

TheHeader.propTypes = {};

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};

const mapDispatchsToProps = dispatch => {
    return dispatchDeleteToken(dispatch);
};

export default connect(mapStateToProps, mapDispatchsToProps)(TheHeader);