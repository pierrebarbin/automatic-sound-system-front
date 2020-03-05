import React from 'react';
import PlayPlaylistTableItem from "./PlayPlaylistTableItem";

const PlayPlaylistTable = ({playlists}) => {
    if (playlists === null) return '';

    const playPlaylistTableItems = playlists.map(playlist => (
        <PlayPlaylistTableItem
            key={playlist.id}
            playlist={playlist}/>
    ));

    return (
        <div className="bg-gray-900 text-gray-500 p-4 rounded-lg shadow-lg">
            <div className="pt-2">
                <h1 className="text-xl font-semibold">Jouer à une partie</h1>
                <div className="border-b border-gray-900 pt-1"/>
                <div>{playPlaylistTableItems}</div>
            </div>
        </div>
    );
};

export default PlayPlaylistTable;