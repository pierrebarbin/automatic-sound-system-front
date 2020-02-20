import React from "react";

const InputPlaylist = ({ value, name, onChange, placeholder }) => {
  return (
    <input
      value={value}
      type="text"
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputPlaylist;
