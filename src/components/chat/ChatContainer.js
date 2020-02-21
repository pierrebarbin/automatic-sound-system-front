import React, {useEffect, useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import { axios } from "../../service/axios.js";

const ChatContainer = props => {

    const [messages, setMessages] = useState([]);

    /*useEffect(() => {
        // Ajoute les derniers messages depuis le dernier load
        axios.get('/chats/load')
            .then(function (response) {
                setMessages(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        console.log("aze", messages);
    });*/

    const addMessage = content => {
        if(content === ''){
            return;
        }
        console.log(content);
        axios.post('/chats', {
                "message": content
            })
            .then(function (postResponse) {
                console.log("post")
                // Ajoute les derniers messages depuis le dernier load
                /*axios.get('/chats/load', {
                    params: {
                        lastDate: messages.lastIndexOf().CreatedAt
                    }
                })
                    .then(function (response) {
                        setMessages({...messages, response});
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });*/
                console.log(messages);
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