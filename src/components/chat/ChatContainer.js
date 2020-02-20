import React, {useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import { axios } from "../../service/axios.js";

const ChatContainer = props => {


    // Ajoute les derniers messages depuis le dernier load
    axios.get('/api/chats/load')
        .then(function (response) {
            const [messages, setMessages] = useState(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    const addMessage = content => {
        if(content === ''){
            return;
        }
        axios.post('/api/chats', {
                Message: content
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // Ajoute les derniers messages depuis le dernier load
        axios.get('/api/chats/load', {
            params: {
                lastDate: messages.lastIndexOf().CreatedAt
            }
        })
            .then(function (response) {
                addMessage(response.data)
            })
            .catch(function (error) {
                // handle error
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