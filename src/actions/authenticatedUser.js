const key = 'authenticatedUser';

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

export {dispatchAddAuthenticatedUser};
