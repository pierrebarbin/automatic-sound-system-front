import React from "react";
import TableItem from "./HomeTablePlaylistItem.js";
const HomeTablePlayList = ({ playlists, t }) => {
    return (
        <div className="bg-gray-900 p-4 shadow rounded-lg">
            <div>
                <h3 className="text-xl font-semibold">
                    Dernières parties jouées
                </h3>
                <div className="separator-b pt-1" />
                <div className="flex flex-row mt-2 text-lg font-semibold">
                    <div className="flex-1">
                        {t("home.tablePlaylist.title")}
                    </div>
                    <div className="flex-1">{t("home.tablePlaylist.npu")}</div>
                    <div className="flex-1">
                        {t("home.tablePlaylist.creator")}
                    </div>
                    <div className="flex-1">
                        {t("home.tablePlaylist.scoreMax")}
                    </div>
                    <div className="flex-1">
                        {t("home.tablePlaylist.action")}
                    </div>
                </div>
                <div>
                    {playlists.map(playlist => {
                        return (
                            <TableItem
                                key={playlist.id}
                                playlist={playlist}
                                t={t}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeTablePlayList;
