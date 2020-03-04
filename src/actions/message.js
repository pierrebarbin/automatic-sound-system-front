import Message from "../model/Message/Message";

const dispatchDeleteMessage = (dispatch, object = {}) => {
    object.deleteMessage = id => {
        dispatch({type: 'DELETE', key: 'messages', id: id})
    };
};

const dispatchAddMessage = (dispatch, object = {}) => {
    object.addMessage = (content, type, duration = 5000) => {
        const message = new Message(content, type);

        dispatch({
            type: 'CREATE',
            key: 'messages',
            message: message
        });

        setTimeout(() => {
            dispatch({type: 'DELETE', key: 'messages', id: message.id})
        }, duration);
    };

    return object;
};

export {dispatchDeleteMessage, dispatchAddMessage};
