import React from 'react';
import {formatDateTime} from "../../service/date/format";
import {connect} from "react-redux";

const ChatConversationItem = ({message, user}) => {
    const dateTimeFormat = formatDateTime(new Date(message.createdAt));
    const isCurrentUserMessage = (user !== null && message.user.id === user.id) ?"current-user-message" : "";

    return (
        <div className={`flex mt-4 ${isCurrentUserMessage}`}>
            <div>
                <div>
                    <span className="font-semibold text-sm">{message.user.username}</span>
                    <span className="text-xs ml-2">{dateTimeFormat}</span>
                </div>
                <div>{message.message}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.authenticatedUser
    };
};

export default connect(mapStateToProps)(ChatConversationItem);