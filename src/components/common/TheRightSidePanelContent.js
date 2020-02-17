import React from 'react';
import UserList from "../user/UserList";
import ChatContainer from "../chat/ChatContainer";

const TheRightSidePanelContent = ({users,currentTab}) => {
    console.log({users,currentTab});
    const renderTabContent = () => {
        if(currentTab === 'chat'){
            return (
                <ChatContainer/>
            )
        }

        return (
            <UserList users={users}/>
        )
    };

    return (renderTabContent());
};

export default TheRightSidePanelContent;