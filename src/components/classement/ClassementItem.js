import React from "react";

const ClassementItem = ({ player }) => {
    const { username, score } = player;
    return (
        <tr>
            <td></td>
            <td>{username}</td>
            <td>{score}</td>
        </tr>
    );
};

export default ClassementItem;
