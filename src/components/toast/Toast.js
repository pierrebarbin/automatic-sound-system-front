import React from 'react';
import {connect} from "react-redux";

const Toast = ({message, deleteMessage}) => {
    const handleClick = () => {
        deleteMessage(message.id);
    };

    const color = (message.isSuccess()) ?'bg-green-500'
        :(message.isWarning()) ?'bg-orange-500'
        :(message.isError()) ?'bg-red-500'
        :'bg-blue-500';

    return (
        <div className={`${color} close cursor-pointer flex items-start justify-between w-full p-2 h-16 mt-4 rounded shadow-lg text-white`}
             role="alert"
             data-id-message={message.id}
             onClick={handleClick}>
            <p className="text-sm">{message.content}</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

const mapDispatchsToProps = dispatch => {
    return {
        deleteMessage: id => {
            dispatch({type: 'DELETE', key: 'messages', id: id})
        }
    };
};

export default connect(mapStateToProps, mapDispatchsToProps)(Toast);
