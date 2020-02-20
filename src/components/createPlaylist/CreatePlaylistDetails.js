import React from "react";
import CreatePlaylistItem from "./CreatePlaylistItem.js";
import Loading from "../common/Loading";
import {useTranslation} from "react-i18next";

const CreatePlaylistDetails = ({ responses, loading }) => {
    const { t } = useTranslation();
    const removeTrack = event => {};

  const renderPlaylistDetails = () => {
      if (loading){
          return (
              <div className="flex items-center justify-center mt-10 bg-gray-900 p-4 shadow-lg rounded-lg mt-2 h-24">
                  <Loading text={t('create_playlist.form.import_url_loading')}/>
              </div>);
      }

      if(responses.length > 0){
          return (
              <div className="mt-10 bg-gray-900 p-4 shadow-lg rounded-lg mt-2">
                  <div className="flex text-xl font-bold">
                      <div className="flex-1">{t('create_playlist.form.inputs.title')}</div>
                      <div className="flex-1">{t('create_playlist.form.inputs.artist')}</div>
                      <div className="flex-1">{t('create_playlist.form.inputs.yt_title')}</div>
                      <div className="flex-1"/>
                  </div>
                  <div className="separator-b"/>
                  <div className="mt-2">
                      {responses.map(response => {
                          return (
                              <CreatePlaylistItem
                                  key={response.id}
                                  response={response}
                                  removeTrack={removeTrack}
                              />
                          );
                      })}
                  </div>
              </div>
          )
      }
  };

  return (
      <div>
          {renderPlaylistDetails()}
      </div>
  );
};

export default CreatePlaylistDetails;
