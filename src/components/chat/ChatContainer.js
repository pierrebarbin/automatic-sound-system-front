import React, {useState} from 'react';
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";

const ChatContainer = props => {

    const [messages, setMessages] = useState([
        {
            id: 1,
            name: "Julie",
            avatar: "https://static-s.aa-cdn.net/img/gp/20600001330578/dNIOzHDFe7geP8xljuRcZ4tRj-6EVMIL2DUB_v6hMrqYb7yXQX7dLX5lEWypg4_RkA=w300?v=1",
            content: "Vous avez le Tp 4?",
            isMe: false
        },
        {
            id: 2,
            name: "J-B",
            avatar: "https://pbs.twimg.com/profile_images/2754678063/c283c58405d8bd628376199c9d537b36.jpeg",
            content: "Non",
            isMe: false
        },
        {
            id: 3,
            name: "Pierrick",
            avatar: "https://pbs.twimg.com/profile_images/2971537976/6850da50f288bece1596e11f0b753f8a.jpeg",
            content: "Ton chat est toujours malade?",
            isMe: false
        },
        {
            id: 4,
            name: "Pierre",
            avatar: "https://pbs.twimg.com/profile_images/737757686008152066/9A_nfpYL_400x400.jpg",
            content: "Ya plus de TP",
            isMe: true
        },
    ]);

    const addMessage = content => {
        if(content === ''){
            return;
        }
        setMessages([
            ...messages,
            {
                id: 5,
                name: "Pierre",
                avatar: "https://pbs.twimg.com/profile_images/737757686008152066/9A_nfpYL_400x400.jpg",
                content: content,
                isMe: true
            }
        ]);
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