export const actionTypes = {
    join: 'USER_JOIN',
    userJoining: 'USER_JOINING',
    joinFailed: 'USER_JOIN_FAILED',
    leave: 'LEAVE',
    userLeaving: 'USER_LEAVING',
    userLeft: 'USER_LEFT',
    userExists: 'USER_EXISTS',
    joined: 'USER_JOINED'
};

const urls = {
    join: (name) => `api/join?name=${name}`,
    leave: (name) => `api/leave?name=${name}`
}

export const actionCreators = {
    join: (name) => async (dispatch, getState) => {

        //stop if they are already trying to join
        if (getState().users.joining) {
            return
        }

        //has the user name already been taken
        if (getState().users.includes(name)) {
            dispatch({
                type: actionTypes.userExists,
                user: name
            });
            return;
        }

        //publish joining attempt
        dispatch({ type: actionTypes.userJoining, name });

        const url = urls.join(name);
        const response = await fetch(url);
        const joinResponse = await response.json();


        if (joinResponse.fail) {
            dispatch({
                type: actionTypes.joinFailed
            });
        }

        dispatch({ type: actionTypes.joined, name });
    },
    leave: (name) => async (dispatch) => {

        //publish leave event to other users
        dispatch({ type: actionTypes.userLeaving });

        const response = await fetch(urls.leave(name));
        const forecasts = await response.json();


        dispatch({ type: actionTypes.leave, name });
    }
};