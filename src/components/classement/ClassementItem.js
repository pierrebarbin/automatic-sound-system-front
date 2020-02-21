import React from "react";

const ClassementItem = ({ player }) => {
    const { username, score } = player;
    return (
        <div className="flex flex-row">
            <div className="flex-1">{username}</div>
            <div className="flex-1">{score}</div>
        </div>
    );
};

export default ClassementItem;
