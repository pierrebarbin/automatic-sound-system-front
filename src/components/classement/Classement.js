import React from "react";
import ClassementItem from "./ClassementItem.js";
import {useTranslation} from "react-i18next";

//Classement est un objet composé de {id:int unique, username:string, score: int}
const Classement = ({title, classementItems}) => {
    const {t} = useTranslation();

    return (
        <div className="bg-gray-500 text-gray-900 p-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="border-b border-gray-900 pt-1"/>
            <div className="pt-2">
                <div className="flex flex-row text-lg">
                    <div className="flex-1 font-semibold">{t("classement.joueur")}</div>
                    <div className="flex-1 font-semibold">{t("classement.score")}</div>
                </div>
                <div>
                    {classementItems.map(player => {
                        return (
                            <ClassementItem key={player.id} player={player}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Classement;
