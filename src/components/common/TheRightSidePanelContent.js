import React from 'react';
import ChatContainer from "../chat/ChatContainer";

const TheRightSidePanelContent = ({users, currentTab}) => {
    const renderTabContent = () => {
        return (
            <ChatContainer/>
        )
    };

    return (renderTabContent());
};

export default TheRightSidePanelContent;