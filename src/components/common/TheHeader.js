import React , {useState,useEffect}  from 'react';
import SVG from 'react-inlinesvg';
import HomeIcon from '../../assets/icons/zondicons/home.svg';
import Badge from '../../assets/icons/zondicons/badge.svg';
import LogoutIcon from '../../assets/icons/entypo/log-out.svg';
import {useTranslation} from 'react-i18next';
import {Link, useHistory} from "react-router-dom";
import {logOut,isUserLogged} from '../../service/entity/userService';


const TheHeader = props => {
    const {t} = useTranslation();
    let history = useHistory();
    const [isUserLog, setIsuserlogged] = useState(isUserLogged);     
    useEffect(() => {
        // Met à jour le titre du document via l’API du navigateur
    usrupd();
    });
    const onLogOut = () => {
        logOut();
        history.push("/login");
    };
    function usrupd () {
      setIsuserlogged(isUserLogged);
    }
    console.log(isUserLog);
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

                    <div>
                        {isUserLog ?
                         ( 
                         <div>
                          <a
                            className="block p-1 bg-gray-800 rounded-full hover:shadow-lg "
                            href="/profile"
                        >
                            <SVG
                                src={Badge}
                                className="h-5 h-5 fill-current"
                                title="profile"
                            />
                        </a>     
                         <button
                            className="block p-2 bg-gray-800 rounded-full hover:shadow-lg "
                            onClick={() => onLogOut()}
                        >
                            <SVG
                                src={LogoutIcon}
                                className="h-5 h-5 fill-current"
                                title={t('global.header.logout')}
                            />
                        </button> 
                        </div>)
                        :
                        ("pas de user")
                        }
                       
                    </div>
                </nav>
            </div>
        </div>
    );
};

TheHeader.propTypes = {};

export default TheHeader;