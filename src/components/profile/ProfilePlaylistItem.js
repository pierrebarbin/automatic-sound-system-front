import React from "react";

const ProfilePlaylistItem = ({ componentsParameters }) => {
    console.log(componentsParameters);
    const { title, score } = componentsParameters;
    return (
        <div className="flex flex-row">
            <label className="flex-1">{title}</label>
            <label className="flex-1">{score}</label>
        </div>
    );
};

export default ProfilePlaylistItem;
