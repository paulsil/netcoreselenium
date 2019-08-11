export const actionTypes = {
    sendMessage: 'SEND_MESSAGE',
    receiveMessage: 'RECEIVE_MESSAGE'
};
    
const initialState = { user: 'jim', message: 'nope' };

export const actionCreators = {
    send: (user, message) => (dispatch, getState) => {
        dispatch({ type: actionTypes.sendMessage, user, message });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === actionTypes.sendMessage) {
    return { ...state };
  }

  if (action.type === actionTypes.receiveMessage) {
    return { ...state, user: action.user, message: action.message };
  }

  return state;
};

