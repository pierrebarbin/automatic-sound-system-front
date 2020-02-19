import React, { useState } from "react";
import CreatePlaylistTable from "./CreatePlaylistTable.js";
import InputPlaylist from "./InputPlaylist.js";

const CreatePlaylist = () => {
  const [name, setName] = useState("");

  const [responses, setResponses] = useState([]);

  const onNameChange = event => setName(event.target.value);

  const onImportchange = event => {
    if (event.target.value === "") return;

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
      <form action="">
        <fieldset>
          <InputPlaylist
            value={name}
            name="PlayListName"
            onChange={onNameChange}
            placeholder="nom de la playlist"
          />
          <InputPlaylist
            value={name}
            name="UrlPlaylist"
            onChange={onImportchange}
            placeholder="import playlist"
          />
          <CreatePlaylistTable responses={responses} />
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePlaylist;
