import React, { useState } from "react";
import SVG from "react-inlinesvg";
import EditIcon from "../../assets/icons/zondicons/edit-pencil.svg";
import DeleteIcon from "../../assets/icons/zondicons/trash.svg";
import ValidateIcon from "../../assets/icons/zondicons/checkmark.svg";
import CancelIcon from "../../assets/icons/zondicons/close.svg";
import { useTranslation } from "react-i18next";

const CreatePlaylistItem = ({ response, removeTrack,checkValidite }) => {
    const { t } = useTranslation();

    // const { title, artist, track, id } = response;
    const { YTTitle, id, thumbnails, validLine , singer , title } = response;

    const [editedTitle, setTitle] = useState("");
    const [editedArtist, setArtist] = useState("");
    const [isEdition, setIsEdition] = useState(false);
    const [editingTitle, setEditingTitle] = useState("");
    const [editingArtist, setEditingArtist] = useState("");

    const onTitleEditedChange = event => setEditingTitle(event.target.value);
    const onArtistEditedChange = event => setEditingArtist(event.target.value);

    const edit = (identifiant) => {
        // if (editedTitle === "" && editedArtist === "") {
        //     return;
        // }
        // setTitle(editingTitle);
        // setArtist(editingArtist);
        
        response.title = editingTitle;
        response.singer = editingArtist;
        response.track = "/api/tracks/"+identifiant;
        
        setIsEdition(false);
        checkValidite();
    };

    const cancel = () => {
        setEditingTitle(editedTitle);
        setEditingArtist(editedArtist);
        setIsEdition(false);
    };

    const renderTitle = () => {
        if (!isEdition) {
            if ( title == undefined || title.trim() == "" ){
                return ( 
                    <div className="bg-red-600 p-1 h-8 rounded-lg focus:outline-none focus:shadow-outline w-full"></div>  
                )
            }
            else{
                return <span>{title}</span>;
            }
        }

        return (
            <input
                className="bg-gray-500 text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="text"
                value={editingTitle}
                onChange={onTitleEditedChange}
                name="title"
                id={"title" + id}
            />
        );
    };

    const renderArtist = () => {
        if (!isEdition) {
            if ( singer == undefined || singer.trim() == "" ){
                return ( 
                    <div className="bg-red-600 p-1 h-8 rounded-lg focus:outline-none focus:shadow-outline w-full"></div>
                )
            }
            else{
                return <span>{singer}</span>;
            }
        }

        return (
            <input
                className="bg-gray-500 text-gray-900 p-1 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="text"
                value={editingArtist}
                onChange={onArtistEditedChange}
                name="artist"
                id={"artist" + id}
            />
        );
    };

    return (
        
        <div className="flex mt-2" >
            <div className="flex-1 px-1"> <img src={thumbnails} className="w-48 h-32"/> </div>
            <div className="flex-1 px-1">{YTTitle}</div>
            <div className="flex-1 px-1" >{renderTitle()}</div>
            <div className="flex-1 px-1" >{renderArtist()}</div>
            <div className="flex-1 px-1">
                {isEdition ? (
                    <span>
                        <button
                            className="text-green-700 ml-2"
                            type="button"
                            onClick={() => edit(id)}
                        >
                            <SVG
                                className="w-5 h-5 fill-current"
                                src={ValidateIcon}
                                title={t("create_playlist.form.validate")}
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
                                title={t("create_playlist.form.cancel")}
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
                            title={t("create_playlist.form.edit")}
                        />
                    </button>
                )}
                <button
                    className="text-red-800 ml-2"
                    type="button"
                    onClick={() => removeTrack(id)}
                >
                    <SVG
                        className="w-5 h-5 fill-current"
                        src={DeleteIcon}
                        title={t("create_playlist.form.delete")}
                    />
                </button>
            </div>
        </div>
    );
};

export default CreatePlaylistItem;
