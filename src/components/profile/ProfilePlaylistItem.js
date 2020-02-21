import React from "react";

const ProfilePlaylistItem = ({ componentsParameters }) => {
    console.log(componentsParameters);
    const { title, score } = componentsParameters;
    return (
        <div>
            <label>{title}</label>
            <label>{score}</label>
        </div>
    );
};

export default ProfilePlaylistItem;
