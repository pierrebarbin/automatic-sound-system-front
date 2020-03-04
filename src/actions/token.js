const key = 'token';

const dispatchDeleteToken = (dispatch, object = {}) => {
    object.deleteToken = () => {
        dispatch({type: 'DELETE', key: key});
        dispatch({type: 'DELETE', key: 'authenticatedUser'});
    };

    return object;
};

const dispatchAddToken = (dispatch, object = {}) => {
    object.addToken = token => {
        dispatch({
            type: 'CREATE',
            key: key,
            token: token
        });
    };

    return object;
};

export {dispatchDeleteToken, dispatchAddToken};
