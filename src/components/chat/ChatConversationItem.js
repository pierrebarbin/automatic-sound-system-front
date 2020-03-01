import React from 'react';
import {formatDateTime} from "../../service/date/format";
import {getUser} from "../../service/sessionStorage/userService";

const ChatConversationItem = props => {
    const dateTimeFormat = formatDateTime(new Date(props.message.createdAt));
    const isCurrentUserMessage = (props.message.user.id === getUser().id) ? "current-user-message" : "";

    return (
        <div className={`flex mt-4 ${isCurrentUserMessage}`}>
            <div>
                <div>
                    <span className="font-semibold text-sm">{props.message.user.username}</span>
                    <span className="text-xs ml-2">{dateTimeFormat}</span>
                </div>
                <div>{props.message.message}</div>
            </div>
        </div>
    );
};

export default ChatConversationItem;