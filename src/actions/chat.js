const key = 'chats';

const dispatchAddChats = (dispatch, object = {}) => {
    object.addChats = chats => {
        dispatch({
            type: 'CREATE',
            key: key,
            chats: chats
        });
    };

    return object;
};

export {dispatchAddChats};
