import React, {useState} from 'react';

import ChatFormInput from "./ChatFormInput";
import ChatFormButton from "./ChatFormButton";
import {isUserLog} from "../../service/loginService";

const ChatForm = ({addMessages}) => {

    const [message, setMessage] = useState('');

    const onMessageChange = event => setMessage(event.target.value);
    const resetMessage = () => setMessage('');

    if(!isUserLog())    {
        return "";
    }

    return (
        <div className="flex">
            <ChatFormInput
                message={message}
                onMessageChange={onMessageChange}
                resetMessage={resetMessage}
                addMessages={addMessages}
            />
            <ChatFormButton
                message={message}
                resetMessage={resetMessage}
                addMessages={addMessages}
            />
        </div>
    );
};

export default ChatForm;