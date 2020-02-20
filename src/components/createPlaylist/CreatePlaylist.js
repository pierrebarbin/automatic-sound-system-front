import React, { useState } from "react";
import CreatePlaylistTable from "./CreatePlaylistTable.js";
import InputPlaylist from "./InputPlaylist.js";
import {useTranslation} from "react-i18next";
import SVG from "react-inlinesvg";
import MusicComposeIllustration from "../../assets/illustrations/undraw/undraw_compose_music_ovo2.svg";

const CreatePlaylist = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [importUrl, setImportUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  const onNameChange = event => setName(event.target.value);

  const onImportChange = event => {
    const value = event.target.value;
    setImportUrl(value);
    setLoading(true);
    //Axios mock
    setTimeout(function () {
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
    },3000);
    // Axios.post(CONSTANT.URLPLAYLIST, event.target.value).then()

  };
  return (
    <div className="relative pt-8 pl-4">
      <div className="relative z-10">
        <h3 className="font-bold text-4xl">{t('create_playlist.title')}</h3>
        <form>
          <label
              htmlFor="playListTitle"
              className="block mt-4 text-lg"
          >
            {t('create_playlist.form.title')}
          </label>
          <InputPlaylist
              id="playListTitle"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-64 mt-1"
              value={name}
              name="PlayListName"
              onChange={onNameChange}
          />
          <label
              htmlFor="playListImportUrl"
              className="block mt-4 text-lg"
          >
            {t('create_playlist.form.import_url')}
          </label>
          <InputPlaylist
              id="playListImportUrl"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-64 md:w-2/5 mt-1 placeholder-gray-900"
              value={importUrl}
              name="UrlPlaylist"
              onChange={onImportChange}
              placeholder={t('create_playlist.form.import_url_placeholder')}
          />
          <CreatePlaylistTable loading={loading} responses={responses} />
        </form>
      </div>
      <div className="absolute right-0 top-0 mt-16 text-right">
        <SVG
            className="hidden sm:block sm:h-32 md:h-48 lg:h-72 xl:h-96"
            src={MusicComposeIllustration}
            title={t('create_playlist.title')}
        />
      </div>
    </div>
  );
};

export default CreatePlaylist;
