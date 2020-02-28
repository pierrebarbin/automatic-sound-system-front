import React, {useEffect, useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import {axiosAuthenticated} from "../../service/axios/axios";

const ChatContainer = props => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Ajoute les derniers messages depuis le dernier load ou tous les messages si il n'y en a pas
        axiosAuthenticated.get(
            (messages.length <= 0)
                ? ('/chats/load', {
                    params: {
                        "after": messages.lastIndexOf().createdAt
                    }
                })
                : ('/chats/load'))
            .then(function (response) {
                setMessages(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });

    const addMessage = content => {
        if (content === '') {
            return;
        }

        console.log(content);
        axiosAuthenticated.post('/chats', {
            message: content
        })
            .then(function (postResponse) {
                console.log('post réussi');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    if (messages.length) {
        return;
    }
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