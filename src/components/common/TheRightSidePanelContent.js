import React from 'react';
import ChatContainer from "../chat/ChatContainer";

const TheRightSidePanelContent = props => {
    const renderTabContent = () => {
        return (
            <ChatContainer {...props}/>
        )
    };

    return (renderTabContent());
};

export default TheRightSidePanelContent;