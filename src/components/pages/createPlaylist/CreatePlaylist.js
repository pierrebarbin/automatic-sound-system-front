import React, { useState, useEffect } from "react";
import CreatePlaylistDetails from "../../createPlaylist/CreatePlaylistDetails.js";
import InputPlaylist from "../../createPlaylist/InputPlaylist.js";
import { useTranslation } from "react-i18next";
import SVG from "react-inlinesvg";
import MusicComposeIllustration from "../../../assets/illustrations/undraw/undraw_compose_music_ovo2.svg";
import * as Api from "../../../api/CreatePlaylistApi";
import {Link, useHistory} from "react-router-dom";

import {connect} from "react-redux";
import {error, success} from "../../../model/Message/types";
import {dispatchAddMessage} from "../../../actions/message";

const CreatePlaylist = ({addMessage}) => {
    const { t } = useTranslation();
    let history = useHistory();

    const [name, setName] = useState("");
    const [importUrl, setImportUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [responses, setResponses] = useState([]);
    const [isSubmitable, setIsSubmitable] = useState(false);

    useEffect(()=>{
        checkValidite();
    },[responses])

    const checkValidite = () => {
        setIsSubmitable(true);

        if ( responses.length == 0 ){
            setIsSubmitable(false);
        }
        else{
            responses.map( item => {
                if ( item.title == undefined || item.singer == undefined ){
                    setIsSubmitable(false);
                }
                else if ( item.title.trim() === "" || item.singer.trim() === "" ){
                    setIsSubmitable(false);
                }

            });
        }

        if ( document.getElementById("playListTitle").value.trim() == "" ){
            setIsSubmitable(false);
        }

    } 

    const onNameChange = event => {
        setName(event.target.value);
        // checkValidite();
    };

    const onImportChange = event => {
        const value = event.target.value;
        var paramList = "";
        var expression = new RegExp(
            "^https?://(www.youtube.com|youtube.com)/playlist\\?list=(.*)$"
        );
        if (!expression.test(value)) {
            setImportUrl(value);
            return;
        }
        if (value.includes("list")) {
            var params = value.split("=");
            paramList = params[1];
        }
        setImportUrl(value);
        setLoading(true);

        Api.postUrl(paramList)
            .then(res => {
                setResponses(res);
                setLoading(false);
            })
            .catch(err => {
                addMessage(err.statusText, error);
            });
    };

    const savePlaylist = () => {
        let data = {};
        data.name = document.getElementById("playListTitle").value.trim();
        data.scoreMax = 9*(responses.length+1);
        data.results = responses;
        

        Api.savePlaylist(data)
        .then(res => {
            addMessage("Playlist sauvegardée !", success);
            history.push("/");
        })
        .catch(err => {
            addMessage(err.statusText, error);
        });

    }

    const removeTrack = id => {
        setResponses(
            responses.filter(function(value, index, arr) {
                return value.id !== id;
            }),
        );
            
        // checkValidite();
    };
    return (
        <div className="relative pt-8 pl-4">
            <div className="relative z-10">
                <h3 className="font-bold text-4xl">
                    {t("create_playlist.title")}
                </h3>
                <form>
                    <label
                        htmlFor="playListTitle"
                        className="block mt-4 text-lg"
                    >
                        {t("create_playlist.form.title")}
                    </label>
                    <InputPlaylist
                        id="playListTitle"
                        className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-64 mt-1"
                        value={name}
                        name="PlayListName"
                        onChange={onNameChange}
                    />
                    <label
                        htmlFor="playListImportUrl"
                        className="block mt-4 text-lg"
                    >
                        {t("create_playlist.form.import_url")}
                    </label>
                    <InputPlaylist
                        id="playListImportUrl"
                        className="bg-gray-500 text-gray-900 p-2 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-64 md:w-2/5 mt-1 placeholder-gray-400"
                        value={importUrl}
                        name="UrlPlaylist"
                        onChange={onImportChange}
                        placeholder={t(
                            "create_playlist.form.import_url_placeholder"
                        )}
                        disabled={loading}
                    />
                    {isSubmitable ? (
                        <button
                            onClick={() => savePlaylist()}
                            type="button"
                            className="p-3 ml-2 bg-blue-600 hover:bg-blue-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline"
                        >
                            {t("create_playlist.form.create")}
                        </button>
                    ) : (
                        ""
                    )}
                    <CreatePlaylistDetails
                        loading={loading}
                        responses={responses}
                        removeTrack={removeTrack}
                        checkValidite={checkValidite}
                    />
                    {isSubmitable ? (
                        <button
                            onClick={() => savePlaylist()}
                            type="button"
                            className="p-3 bg-blue-600 hover:bg-blue-700 text-gray-300 rounded-lg mt-4 hover:shadow-lg shadow focus:outline-none focus:shadow-outline"
                        >
                            {t("create_playlist.form.create")}
                        </button>
                    ) : (
                        ""
                    )}
                </form>
            </div>
            <div className="absolute right-0 top-0 hidden sm:block sm:mt-24 sm lg:mt-8 text-right">
                <SVG
                    className="sm:h-32 md:h-48 lg:h-56"
                    src={MusicComposeIllustration}
                    title={t("create_playlist.title")}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {};
};
const mapDispatchsToProps = dispatch => {
    return dispatchAddMessage(dispatch);
};

export default connect(mapStateToProps, mapDispatchsToProps)(CreatePlaylist);
