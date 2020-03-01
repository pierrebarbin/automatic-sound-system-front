import React, {useRef, useState} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import ChatConversationItem from "./ChatConversationItem";

const ChatConversation = props => {
    const scrollbar = useRef();

    const [isInit, setIsInit] = useState(false);

    const onUpdate = () => {
        if (!isInit && props.messages.length > 0) {
            scrollbar.current.scrollToBottom();
            setIsInit(true);
        }
    };

    return (
        <Scrollbars
            ref={scrollbar}
            onUpdate={onUpdate}
        >
            {props.messages.map(message => {
                return (
                    <ChatConversationItem key={message.id} message={message}/>
                );
            })}
        </Scrollbars>
    );
};

export default ChatConversation;