import React from "react";
import TableItem from "./HomeTablePlaylistItem.js";
const HomeTablePlayList = ({ playlists, t }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>{t("home.tablePlaylist.title")}</th>
                    <th>{t("home.tablePlaylist.npu")}</th>
                    <th>{t("home.tablePlaylist.creator")}</th>
                    <th>{t("home.tablePlaylist.scoreMax")}</th>
                    <th>{t("global.action")}</th>
                </tr>
            </thead>
            <tbody>
                {playlists.map(playlist => {
                    return (
                        <TableItem
                            key={playlist.id}
                            playlist={playlist}
                            t={t}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default HomeTablePlayList;
