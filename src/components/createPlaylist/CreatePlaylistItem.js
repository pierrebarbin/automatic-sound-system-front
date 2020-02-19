import React, { useState } from "react";

const CreatePlaylistItem = ({ response , removeItem }) => {

  const { title, artist, track, id } = response;
  const [editedTitle, setTitre] = useState(title);
  const [editedArtist, setArtiste] = useState(artist);

  const onTitreEditedChange = event => setTitre(event.target.value);
  const onArtisteEditedChange = event => setArtiste(event.target.value);

  const setReadOnly = () => {
    var titre = document.getElementById("titre" + id);
    var artiste = document.getElementById("artiste" + id);
    if (titre === null || artiste === null) return;
    titre.readOnly = !titre.readOnly;
    artiste.readOnly = !artiste.readOnly;
  };

  const edit = () => {
    if (editedTitle === "" && editedArtist === "") return;
    setTitre(editedTitle);
    setArtiste(editedArtist);
    setReadOnly();
  };
  const cancel = () => {
    setTitre(title);
    setArtiste(artist);
    setReadOnly();
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          value={editedTitle}
          onChange={onTitreEditedChange}
          name="titre"
          id={"titre" + id}
          readOnly
        />
      </td>
      <td>
        <input
          type="text"
          value={editedArtist}
          onChange={onArtisteEditedChange}
          name="artiste"
          id={"artiste" + id}
          readOnly
        />
      </td>
      <td>{track.yttitle}</td>
      <td id="action">
        <fieldset>
          <button type="button" onClick={() => setReadOnly()}>
            E
          </button>
          <button type="button" onClick={() => removeItem()}>
            X
          </button>
        </fieldset>
        <fieldset>
          {" "}
          {/* Le masquer (ne l'afficher que lorsque l'on clique  sur edit),
        je vais voir si je fais une fonction qui render ce bout. */}
          <button type="button" onClick={() => edit()}>
            V
          </button>
          <button type="button" onClick={() => cancel()}>
            C
          </button>
        </fieldset>
      </td>
    </tr>
  );
};

export default CreatePlaylistItem;
