import React, { useState } from "react";
import CreatePlaylistDetails from "../../createPlaylist/CreatePlaylistDetails.js";
import InputPlaylist from "../../createPlaylist/InputPlaylist.js";
import { useTranslation } from "react-i18next";
import SVG from "react-inlinesvg";
import MusicComposeIllustration from "../../../assets/illustrations/undraw/undraw_compose_music_ovo2.svg";
import * as Api from "../../../api/CreatePlaylistApi";
const CreatePlaylist = () => {
    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [importUrl, setImportUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [responses, setResponses] = useState([]);
    const [isSubmitable, setIsSubmitable] = useState(false);

    const onNameChange = event => {
        if (responses.length > 0 && event.target.value !== "") {
            setIsSubmitable(true);
        } else {
            setIsSubmitable(false);
        }
        setName(event.target.value);
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
        // new Promise((resolve, reject) => {
        //     setLoading(true);
        //     setResponses(Api.postUrl(paramList));
        // }).then(() => {
        //     setLoading(false);
        //         if(responses.length > 0 && name !== "")
        // {
        //     setIsSubmitable(true);
        // }
        // });

        // //Axios mock
        setTimeout(function() {
            setResponses([
                {
                    id: 1,
                    title: "Belle",
                    artist: "Les dix commandements",
                    track: {
                        yttitle: "Belle - Les dix commandements"
                    }
                },
                {
                    id: 2,
                    title: "Je t'aime",
                    artist: "Céline dion",
                    track: {
                        yttitle: "Je t'aime - Céline dion"
                    }
                },
                {
                    id: 3,
                    title: "Yaka",
                    artist: "Shakira",
                    track: {
                        yttitle: "Yaka - Shakira"
                    }
                },
                {
                    id: 4,
                    title: "She wolf",
                    artist: "Shakira",
                    track: {
                        yttitle: "She wolf - Shakira"
                    }
                }
            ]);
            setLoading(false);
            if (responses.length > 0 && name !== "") {
                setIsSubmitable(true);
            }
        }, 3000);
    };

    const removeTrack = id => {
        setResponses(
            responses.filter(function(value, index, arr) {
                return value.id !== id;
            })
        );
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
                    <CreatePlaylistDetails
                        loading={loading}
                        responses={responses}
                        removeTrack={removeTrack}
                    />
                    {isSubmitable ? (
                        <button
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

export default CreatePlaylist;
