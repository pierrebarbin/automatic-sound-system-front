const key = 'authenticatedUser';

const dispatchDeleteAuthenticatedUser = (dispatch, object = {}) => {
    object.deleteAuthenticatedUser = () => {
        dispatch({type: 'DELETE', key: key})
    };

    return object;
};

const dispatchAddAuthenticatedUser = (dispatch, object = {}) => {
    object.addAuthenticatedUser = user => {
        dispatch({
            type: 'CREATE',
            key: key,
            authenticatedUser: user
        });
    };

    return object;
};

export {dispatchDeleteAuthenticatedUser, dispatchAddAuthenticatedUser};
