import React from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import {loadChats, loadLastChats, postChat} from "../../service/entity/chatService";
import {connect} from "react-redux";
import {dispatchAddChats} from "../../actions/chat";

const ChatContainer = ({user, chats, addChats}) => {
    const loadMessages = () => {
        let hasSetMessage = false;

        if (user !== null) {
            const promise = (chats.length < 1)
                ? loadChats()
                : loadLastChats(chats[chats.length - 1].createdAt);

            // Ajoute les derniers chats depuis le dernier load ou tous les chats si il n'y en a pas
            promise
                .then(response => {
                    if (response.data.length > 0) {
                        addChats([...response.data]);
                        hasSetMessage = true
                    }
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                })
                .finally(() => {
                    if (!hasSetMessage) {
                        setTimeout(loadMessages, 1000);
                    }
                });
        }
    };

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

    loadMessages();

    return (
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
    return {
        user: state.authenticatedUser,
        chats: state.chats
    };
};

const mapDispatchsToProps = dispatch => {
    return dispatchAddChats(dispatch);
};

export default connect(mapStateToProps, mapDispatchsToProps)(ChatContainer);