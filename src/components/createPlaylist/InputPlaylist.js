import React from "react";

const InputPlaylist = ({ id,className, value, name, onChange, placeholder,disabled }) => {
  return (
    <input
        id={id}
        className={className}
        value={value}
        type="text"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
    />
  );
};

export default InputPlaylist;
