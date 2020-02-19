import React, { useState } from "react";
import CreatePlaylistTable from "./CreatePlaylistTable.js";
import InputPlaylist from "./InputPlaylist.js";

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [importUrl, setImportUrl] = useState("");

  const [responses, setResponses] = useState([]);

  const onNameChange = event => setName(event.target.value);

  const onImportChange = event => {
    const value = event.target.value;

    setImportUrl(value);

    // Axios.post(CONSTANT.URLPLAYLIST, event.target.value).then()
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
  };
  return (
    <div>
      <form>
          <InputPlaylist
            value={name}
            name="PlayListName"
            onChange={onNameChange}
            placeholder="nom de la playlist"
          />
          <InputPlaylist
            value={importUrl}
            name="UrlPlaylist"
            onChange={onImportChange}
            placeholder="import playlist"
          />
          <CreatePlaylistTable responses={responses} />
      </form>
    </div>
  );
};

export default CreatePlaylist;
