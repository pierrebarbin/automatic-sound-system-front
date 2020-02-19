import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ChatConversationItem from "./ChatConversationItem";

const ChatConversation = ({messages}) => {
    return (
        <Scrollbars>
            {messages.map(message => {
                return (
                    <ChatConversationItem key={message.id}  message={message}/>
                );
            })}
        </Scrollbars>
    );
};

export default ChatConversation;