import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import musicPlaylistIcon from "../../assets/icons/zondicons/music-playlist.svg";

const UserListItem = props => {
    const {id, name, avatar} = props.user;
    return (
        <div className="flex p-2 rounded-lg mt-4 items-center justify-between hover:bg-gray-800 hover:shadow-xl">
            <div className="flex items-center">
                <img
                    className="rounded-full h-10"
                    src={avatar}
                    alt={avatar}
                />
                <span className="font-semibold ml-3">{name}</span>
            </div>
           <div>
               <div className="hover:bg-gray-600 rounded-full hover:text-gray-800 p-2 mr-1 cursor-pointer">
                   <SVG
                       src={musicPlaylistIcon}
                       className="h-4 w-4 fill-current"
                       title={`Défier ${name}`}
                   />
               </div>

           </div>
        </div>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListItem;