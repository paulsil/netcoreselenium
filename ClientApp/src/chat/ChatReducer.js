import { actionTypes } from './ChatActions'

const initialState = { user: 'jim', message: 'nope' };

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
