import React from "react";

const HomeTablePlaylistItem = ({ playlist, t }) => {
    const { id, title, scoreMax, creator, npu } = playlist;

    const playPlaylist = event => {}; //TODO : afficher une alerte et rediriger vers gameplay
    const challengeUser = event => {}; //TODO : afficher un pop-up pour choisir la personne à défier et rediriger vers gameplay
    return (
        <tr>
            <td></td>
            <td>{title}</td>
            <td>{npu}</td>
            <td>{creator}</td>
            <td>{scoreMax}</td>
            <td id="action">
                <fieldset>
                    <button type="button" onClick={() => playPlaylist(id)}>
                        {t("home.tablePlaylistItem.play")}
                    </button>
                    <button type="button" onClick={() => challengeUser(id)}>
                        {t("home.tablePlaylistItem.challenge")}
                    </button>
                </fieldset>
            </td>
        </tr>
    );
};

export default HomeTablePlaylistItem;
