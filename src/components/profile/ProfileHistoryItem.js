import React from "react";

const ProfileHistory = ({ componentsParameters }) => {
    const { playlist, score, creator, date } = componentsParameters;
    return (
        <div className="flex flex-row">
            <label className="flex-1">{playlist}</label>
            <label className="flex-1">{creator}</label>
            <label className="flex-1">{score}</label>
            <label className="flex-1">{date}</label>
        </div>
    );
};

export default ProfileHistory;
