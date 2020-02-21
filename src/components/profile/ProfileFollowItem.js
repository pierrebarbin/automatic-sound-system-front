import React from "react";

const ProfileFollowItem = ({ componentsParameters }) => {
    const { creator, date } = componentsParameters;
    return (
        <div>
            <label>{creator}</label>
            <label>{date}</label>
        </div>
    );
};

export default ProfileFollowItem;
