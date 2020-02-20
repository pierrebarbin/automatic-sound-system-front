import React, { useState } from "react";
import SVG from "react-inlinesvg";
import EditIcon from "../../assets/icons/zondicons/edit-pencil.svg";
import DeleteIcon from "../../assets/icons/zondicons/trash.svg";
import ValidateIcon from "../../assets/icons/zondicons/checkmark.svg";
import CancelIcon from "../../assets/icons/zondicons/close.svg";
import {useTranslation} from "react-i18next";

const CreatePlaylistItem = ({ response, removeItem }) => {
    const { t } = useTranslation();

    const { title , artist, track, id } = response;

    const [editedTitle, setTitle] = useState(title);
    const [editedArtist, setArtist] = useState(artist);
    const [isEdition, setIsEdition] = useState(false);

    const onTitleEditedChange = event => setTitle(event.target.value);
    const onArtistEditedChange = event => setArtist(event.target.value);

    const edit = () => {
        if (editedTitle === "" && editedArtist === "") {
            return;
        }
        setTitle(editedTitle);
        setArtist(editedArtist);
        setIsEdition(false);
    };

    const cancel = () => {
        setIsEdition(false);
    };

    const renderTitle = () => {
        if(!isEdition){
            return (
                <span>{editedTitle}</span>
            )
        }

        return (
            <input
                className="bg-gray-500 text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="text"
                value={editedTitle}
                onChange={onTitleEditedChange}
                name="title"
                id={"title" + id}
            />
        );
    };

    const renderArtist = () => {
        if(!isEdition){
            return (
                <span>{editedArtist}</span>
            )
        }

        return (
            <input
                className="bg-gray-500 text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="text"
                value={editedArtist}
                onChange={onArtistEditedChange}
                name="artist"
                id={"artist" + id}
            />
        );
    };

    return (
        <div className="flex mt-2">
            <div className="flex-1 px-1">
                {renderTitle()}
            </div>
            <div className="flex-1 px-1">
                {renderArtist()}
            </div>
            <div className="flex-1 px-1">
                {track.yttitle}
            </div>
            <div className="flex-1 px-1">
                {isEdition ? (
                    <span>
                        <button
                            className="text-green-700 ml-2"
                            type="button"
                            onClick={() => edit()}
                        >
                            <SVG
                                className="w-5 h-5 fill-current"
                                src={ValidateIcon}
                                title={t('create_playlist.form.validate')}
                            />
                        </button>
                        <button
                            className="text-red-800 ml-2"
                            type="button"
                            onClick={() => cancel()}
                        >
                            <SVG
                                className="w-5 h-5 fill-current"
                                src={CancelIcon}
                                title={t('create_playlist.form.cancel')}
                            />
                        </button>
                    </span>
                    ) : (
                    <button
                        className="text-blue-700 ml-2"
                        type="button"
                        onClick={() => setIsEdition(true)}
                    >
                        <SVG
                            className="w-5 h-5 fill-current"
                            src={EditIcon}
                            title={t('create_playlist.form.edit')}
                        />
                    </button>
                    )
                }
                <button
                    className="text-red-800 ml-2"
                    type="button"
                    onClick={() => removeItem()}
                >
                    <SVG
                        className="w-5 h-5 fill-current"
                        src={DeleteIcon}
                        title={t('create_playlist.form.delete')}
                    />
                </button>
            </div>
        </div>
    );
};

export default CreatePlaylistItem;
