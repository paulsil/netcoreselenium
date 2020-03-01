import { actionTypes } from './UserActions'

const initialState = {
        loggingIn: false,
        loggedIn: false,
        loggingOut: false,
        name: '',
        members: []
    };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === actionTypes.USER_LOGGING_IN) {
        return { ...state, loggingIn: true, name: action.name  };
    }

    if (action.type === actionTypes.USER_LOGGED_IN) {
        return { ...state, loggingIn: false, loggedIn: true };
    }

    if (action.type === actionTypes.USER_LOGGING_OUT) {
        return { ...state, loggingOut: true };
    }

    if (action.type === actionTypes.USER_LOGGED_OUT) {
        return initialState;
    }

    return state;
};
