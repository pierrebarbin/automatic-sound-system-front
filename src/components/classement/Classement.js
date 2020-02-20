import React from "react";
import ClassementItem from "./ClassementItem.js";
//Classement est un objet composé de {id:int unique, username:string, score: int}
const Classement = ({ title, classementItems, t }) => {
    return (
        <div>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>{t("classement.joueur")}</th>
                        <th>{t("classement.score")}</th>
                    </tr>
                </thead>
                <tbody>
                    {classementItems.map(player => {
                        return (
                            <ClassementItem key={player.id} player={player} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Classement;
