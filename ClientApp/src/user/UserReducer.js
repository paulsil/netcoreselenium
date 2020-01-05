import { actionTypes } from './UserActions'

const initialState = { users: [] };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === actionTypes.join) {

        return { ...state };
    }

    if (action.type === actionTypes.receiveMessage) {
        return { ...state, user: action.user, message: action.message };
    }

    return state;
};
