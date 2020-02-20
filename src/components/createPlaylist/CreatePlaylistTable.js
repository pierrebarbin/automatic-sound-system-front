import React from "react";
import CreatePlaylistItem from "./CreatePlaylistItem.js";

const CreatePlaylistTable = ({ responses, loading }) => {
  const removeTrack = event => {};
  
  return (
    <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Artiste</th>
          <th>Titre youtube</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {responses.map(response => {
          return (
            <CreatePlaylistItem
              key={response.id}
              response={response}
              removeTrack={removeTrack}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default CreatePlaylistTable;
