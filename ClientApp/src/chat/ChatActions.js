export const actionTypes = {
    sendMessage: 'SEND_MESSAGE',
    receiveMessage: 'RECEIVE_MESSAGE'
};

export const actionCreators = {
    send: (user, message) => (dispatch, getState) => {
        dispatch({ type: actionTypes.sendMessage, user, message });
    }
};