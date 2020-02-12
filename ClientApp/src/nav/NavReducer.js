import { actionTypes } from './NavActions'

const initialState = { pathname: '/' };

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === actionTypes.changeLocation) {
        if (action.payload.pathname !== state.pathname) {
            return { pathname: action.payload.pathname }
        }
    }
    return state;
};
