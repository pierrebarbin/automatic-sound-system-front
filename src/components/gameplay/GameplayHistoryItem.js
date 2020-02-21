import React from "react";

const GameplayHistoryItem = ({ parameter }) => {
    const { title, artist, isWin } = parameter;
    return (
        <div className="flex flex-row">
            <div className="flex-1">{title}</div>
            <div className="flex-1">{artist}</div>
            <div className="flex-1">{isWin}</div>
        </div>
    );
};

export default GameplayHistoryItem;
