import React from "react";

const ProfileFollowItem = ({ componentsParameters }) => {
    const { creator, date } = componentsParameters;
    return (
        <div className="flex flex-row">
            <label className="flex-1">{creator}</label>
            <label className="flex-1">{date}</label>
        </div>
    );
};

export default ProfileFollowItem;
