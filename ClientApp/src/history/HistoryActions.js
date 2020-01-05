export const actionTypes = {
    getHistoryForUser: 'GET_HISTORY_FOR_USER',
    receiveHistoryForUser: 'RECEIVE_MESSAGE_FOR_USER',
    getHistory: 'GET_HISTORY',
    receiveHistory: 'RECEIVE_HISTORY'
};

export const actionCreators = {
    getHistory: pageIndex => async (dispatch, getState) => {

        //if history request is in flight then exit
        if (getState().page === pageIndex) {
            return;
        }

        //announce request is in flight
        dispatch({
            type: actionTypes.getHistoryForUser,
            pageIndex: pageIndex
        });

        //get paged history
        const url = `api/history?pageIndex=${pageIndex}`;
        const response = await fetch(url);
        const historyPage = await response.json();

        //publish results
        dispatch({
            type: actionTypes.receiveHistory,
            payload: {
                pageIndex: pageIndex,
                results: historyPage
            }
        });

    }
};