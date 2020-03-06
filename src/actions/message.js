import Message from "../model/Message/Message";

const key = 'messages';

const dispatchDeleteMessage = (dispatch, object = {}) => {
    object.deleteMessage = id => {
        dispatch({type: 'DELETE', key: key, id: id})
    };

    return object;
};

const dispatchAddMessage = (dispatch, object = {}) => {
    object.addMessage = (content, type, duration = 5000) => {
        const message = new Message(content, type);

        dispatch({
            type: 'CREATE',
            key: key,
            message: message
        });

        setTimeout(() => {
            dispatch({type: 'DELETE', key: key, id: message.id})
        }, duration);
    };

    return object;
};

export {dispatchDeleteMessage, dispatchAddMessage};
