import React, {useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import {loadChats, loadLastChats, postChat} from "../../service/entity/chatService";
import {connect} from "react-redux";

const ChatContainer = ({user}) => {
    const [messages, setMessages] = useState([]);

    const loadMessages = () => {
        let hasSetMessage = false;

        if (user !== null) {
            const promise = (messages.length < 1)
                ? loadChats()
                : loadLastChats(messages[messages.length - 1].createdAt);

            // Ajoute les derniers messages depuis le dernier load ou tous les messages si il n'y en a pas
            promise
                .then(chats => {
                    if (chats.length > 0) {
                        setMessages([...messages, ...chats]);
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
                })
            ;
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
                <ChatConversation messages={messages}/>
            </div>
            <div className="mt-1">
                <ChatForm addMessages={addMessage}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};

export default connect(mapStateToProps)(ChatContainer);