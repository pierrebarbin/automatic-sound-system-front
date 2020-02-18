import React, {useState} from 'react';

import ChatFormInput from "./ChatFormInput";
import ChatFormButton from "./ChatFormButton";

const ChatForm = ({addMessages}) => {

    const [message, setMessage] = useState('');

    const onMessageChange = event => setMessage(event.target.value);
    const resetMessage = () => setMessage('');

    return (
        <div className="flex">
            <ChatFormInput
                message={message}
                onMessageChange={onMessageChange}
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