import React from "react";

const GameplayHistoryItem = ({ parameter }) => {
    const { title, artiste, score, isWin } = parameter;
    return (
        <div className="flex flex-row">
            <div className="flex-1">{title}</div>
            <div className="flex-1">{artiste}</div>
            <div className="flex-1">{score}</div>
            <div className="flex-1">{isWin}</div>
        </div>
    );
};

export default GameplayHistoryItem;
