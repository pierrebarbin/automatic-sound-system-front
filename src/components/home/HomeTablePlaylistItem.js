import React from "react";

const HomeTablePlaylistItem = ({ playlist, t }) => {
    const { id, title, scoreMax, creator, npu } = playlist;

    const playPlaylist = event => {}; //TODO : afficher une alerte et rediriger vers gameplay
    const challengeUser = event => {}; //TODO : afficher un pop-up pour choisir la personne à défier et rediriger vers gameplay
    return (
        <div className="flex flex-row">
            <div className="flex-1">{title}</div>
            <div className="flex-1">{npu}</div>
            <div className="flex-1">{creator}</div>
            <div className="flex-1">{scoreMax}</div>
            <div className="flex-1">
                <fieldset>
                    <button type="button" onClick={() => playPlaylist(id)}>
                        {t("home.tablePlaylistItem.play")}
                    </button>
                    <button type="button" onClick={() => challengeUser(id)}>
                        {t("home.tablePlaylistItem.challenge")}
                    </button>
                </fieldset>
            </div>
        </div>
    );
};

export default HomeTablePlaylistItem;
