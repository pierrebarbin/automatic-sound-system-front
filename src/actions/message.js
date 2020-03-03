import Message from "../model/Message/Message";

const deleteMessage = (dispatch, object = {}) => {
    object.deleteMessage = id => {
        dispatch({type: 'DELETE', key: 'messages', id: id})
    };
};

const createMessage = (dispatch, object = {}) => {
    object.addMessage = (content, type) => {
        const message = new Message(content, type);

        dispatch({
            type: 'CREATE',
            key: 'messages',
            message: message
        });

        setTimeout(() => {
            dispatch({type: 'DELETE', key: 'messages', id: message.id})
        }, 10000);
    };

    return object;
};

export {deleteMessage, createMessage};
