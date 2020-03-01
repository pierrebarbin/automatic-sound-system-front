import React, {useEffect, useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import {isUserLogged} from "../../service/entity/userService";
import {loadChats, loadLastChats, postChat} from "../../service/entity/chatService";

const ChatContainer = props => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (isUserLogged()) {
            setTimeout(() => {
                const promise = (messages.length < 1)
                    ? loadChats()
                    : loadLastChats(messages[messages.length - 1].createdAt);

                // Ajoute les derniers messages depuis le dernier load ou tous les messages si il n'y en a pas
                promise
                    .then(chats => {
                        if (chats.length > 0) {
                            setMessages([...messages, ...chats]);
                        }
                    })
                    .catch(error => {
                        // handle error
                        console.log(error);
                    });
            }, 500);
        }
    });

    const addMessage = content => {
        if (content === '') {
            return;
        }

        postChat(content)
            .then(function (postResponse) {
                console.log('post réussi');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

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

export default ChatContainer;