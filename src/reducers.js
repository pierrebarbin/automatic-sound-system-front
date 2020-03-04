const initState = {
    messages: []
};

const reducer = (state = initState, action) => {
    if (action.key === 'messages') {
        switch (action.type) {
            case 'CREATE':
                state = {
                    ...state,
                    messages: [...state.messages, action.message]
                };
                break;
            case 'DELETE':
                let filteredMessages = state.messages.filter(message => message.id !== action.id);
                state = {
                    ...state,
                    messages: filteredMessages
                };
                break;
            default:
                break;
        }
    }

    return state;
};

export {reducer};