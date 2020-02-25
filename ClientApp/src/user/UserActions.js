export const actionTypes = {
    USER_LOGGING_IN: 'USER_LOGGING_IN',
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    USER_LOGGING_OUT: 'USER_LOGGING_OUT',
    USER_LOGGED_OUT: 'USER_LOGGED_OUT',
    USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
    USER_NAME_ALREADY_IN_USE: 'USER_NAME_ALREADY_IN_USE'
};

const api = {
    join: (name) => `api/join?name=${name}`,
    leave: (name) => `api/leave?name=${name}`
}

export const actionCreators = {
    logIn: (name) => async (dispatch, getState) => {

        //stop if they are already trying to join
        if (getState().user.loggingIn) {
            return
        }

        //has the user name already been taken
        if (getState().chat.members.includes(name)) {
            dispatch({
                type: actionTypes.USER_NAME_ALREADY_IN_USE,
                user: name
            });
            return;
        }

        //publish joining attempt
        dispatch({ type: actionTypes.USER_LOGGING_IN, name: name });

        const url = api.join(name);
        const response = await fetch(url);
        const joinResponse = await response.json();


        if (!joinResponse.success) {
            dispatch({
                type: actionTypes.USER_LOGIN_FAILED, error: joinResponse.errors
            });
        }

        dispatch({ type: actionTypes.USER_LOGGED_IN, name: name });
    },
    logOut: (name) => async (dispatch) => {

        //stop if they are already trying to join
        if (getState().user.loggedOut) {
            return
        }

        //publish leave event to other users
        dispatch({ type: actionTypes.USER_LOGGING_OUT });

        const response = await fetch(urls.leave(name));
        const logoutResponse = await response.json();


        dispatch({ type: actionTypes.USER_LOGGED_OUT });
    }
};