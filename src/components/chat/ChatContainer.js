import React, {useEffect, useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import { axios } from "../../service/axios.js";

const ChatContainer = props => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Ajoute les derniers messages depuis le dernier load ou tous les messages si il n'y en a pas
        axios.get(
            (messages.length <= 0) ? ('/chats/load', {
                params: {
                    "after": messages.lastIndexOf().CreatedAt
                }
            }) :
            ('/chats/load'))
            .then(function (response) {
                setMessages(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });

    const addMessage = content => {
        if(content === ''){
            return;
        }
        console.log(content);
        axios.post('/chats', {
                message: content
            })
            .then(function (postResponse) {
                console.log('post réussi');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    if(messages.length)  {
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