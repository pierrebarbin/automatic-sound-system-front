import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import SVG from "react-inlinesvg";
import PlayIcon from "../../../../assets/icons/zondicons/play.svg";

const PlayPlaylistTableItem = ({playlist}) => {
    const {t} = useTranslation();

    return (
        <div className="flex flex-row mb-1">
            <div className="flex-1">{playlist.name}</div>
            <div>
                <Link
                    className="block p-2 mr-2 bg-gray-800 rounded-full hover:shadow-lg "
                    to={`/play/${playlist.id}`}>
                    <SVG
                        src={PlayIcon}
                        className="h-5 h-5 fill-current"
                        title={t('playlist.play')}
                    />
                </Link>
            </div>
        </div>
    )
};

export default PlayPlaylistTableItem;