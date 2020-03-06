import React, {useEffect} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import {loadChats, loadLastChats, postChat} from "../../service/entity/chatService";
import {connect} from "react-redux";
import {dispatchAddChats} from "../../actions/chat";

const ChatContainer = ({user}) => {
    const addMessage = content => {
        if (content === '') {
            return;
        }

        postChat(content)
            .then(postResponse => {
                console.log('post réussi');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (user === null) ?'' :(
        <div className="flex flex-col content">
            <div className="chat-conversation">
                <ChatConversation/>
            </div>
            <div className="mt-1">
                <ChatForm addMessages={addMessage}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {user: state.authenticatedUser};
};

export default connect(mapStateToProps)(ChatContainer);