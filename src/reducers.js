import {getToken} from "./service/sessionStorage/tokenService";

const initState = {
    chats: [],
    messages: [],
    token: getToken(),
    authenticatedUser: null
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
    } else if (action.key === 'token') {
        switch (action.type) {
            case 'CREATE':
                state = {
                    ...state,
                    token: action.token
                };
                break;
            case 'DELETE':
                state = {
                    ...state,
                    token: null,
                    authenticatedUser: null
                };
                break;
            default:
                break;
        }
    } else if (action.key === 'authenticatedUser') {
        switch (action.type) {
            case 'CREATE':
                state = {
                    ...state,
                    authenticatedUser: action.authenticatedUser
                };
                break;
            default:
                break;
        }
    } else if (action.key === 'chats' && action.type === 'CREATE') {
        state = {
            ...state,
            chats: [...state.chats, ...action.chats]
        };
    }

    return state;
};

export {reducer};