import React, {useEffect, useRef} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import ChatConversationItem from "./ChatConversationItem";
import {connect} from "react-redux";

const ChatConversation = ({chats}) => {
    const scrollbar = useRef();

    useEffect(() => scrollbar.current.scrollToBottom);

    return (
        <Scrollbars
            ref={scrollbar}
        >
            {chats.map(message => {
                return (
                    <ChatConversationItem key={message.id} message={message}/>
                );
            })}
        </Scrollbars>
    );
};

const mapStateToProps = state => {
    return {
        chats: state.chats
    };
};

export default connect(mapStateToProps)(ChatConversation);