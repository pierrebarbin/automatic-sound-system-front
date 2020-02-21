import React from "react";
import HistoryItem from "./GameplayHistoryItem.js";
const GameplayHistory = ({ gameHistory, t, score }) => {
    return (
        <div className="bg-gray-500 text-gray-900 p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold">
                {t("gameplay.history.title")}
            </h1>
            <span>{t("gameplay.history.score")}</span>
            <span>{score}</span>
            <div className="border-b border-gray-900 pt-1" />
            <div className="pt-2">
                <div className="flex flex-row text-lg">
                    <div className="flex-1 font-semibold">
                        {t("gameplay.history.track.title")}
                    </div>
                    <div className="flex-1 font-semibold">
                        {t("gameplay.history.track.artist")}
                    </div>
                    <div className="flex-1 font-semibold">
                        {t("gameplay.history.isWin")}
                    </div>
                </div>
                <div>
                    <div>
                        {gameHistory.map(game => {
                            return (
                                <HistoryItem key={game.id} parameters={game} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameplayHistory;
