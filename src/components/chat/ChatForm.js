import React, {useState} from 'react';

import ChatFormInput from "./ChatFormInput";
import ChatFormButton from "./ChatFormButton";
import {connect} from "react-redux";

const ChatForm = ({addMessages, user}) => {
    const [message, setMessage] = useState('');

    const onMessageChange = event => setMessage(event.target.value);
    const resetMessage = () => setMessage('');

    if (user === null) {
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

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};

export default connect(mapStateToProps)(ChatForm);