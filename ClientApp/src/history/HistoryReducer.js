import { actionTypes } from './HistoryActions';

const initialState = {
    page: 1,
    users: []
}

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === actionTypes.getHistory) {
        return { ...state, page: action.pageIndex };
    }

    if (action.type === actionTypes.receiveHistory) {
        return { ...state, pageIndex: action.payload.pageIndex, users: action.payload.results };
    }

    return state;
};

