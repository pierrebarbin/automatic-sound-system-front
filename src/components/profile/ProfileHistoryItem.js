import React from "react";

const ProfileHistory = ({ componentsParameters }) => {
    const { playlist, score, creator, date } = componentsParameters;
    return (
        <div>
            <label>{playlist}</label>
            <label>{creator}</label>
            <label>{score}</label>
            <label>{date}</label>
        </div>
    );
};

export default ProfileHistory;
