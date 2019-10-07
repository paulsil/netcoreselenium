export const actionTypes = {
    startBrowserTest: 'START_BROWSER_TEST',
    stopBrowserTest: 'STOP_BROWSER_TEST',
    getBrowserTestState: 'GET_BROWSER_TEST_STATE',
    gotBrowserTestState: 'GOT_BROWSER_TEST_STATE'
};
    
const initialState = { running: false, updateInProgress: false };

export const actionCreators = {
    start: () => (dispatch, getState) => {
        dispatch({ type: actionTypes.startBrowserTest });
    },
    stop: () => (dispatch, getState) => {
        dispatch({ type: actionTypes.stopBrowserTest });
    },
    getState: () => async (dispatch, getState) => {

        if (getState().updateInProgress) {
            //do nothing waiting for an update from the server
            return;
        }

        dispatch({ type: actionTypes.getBrowserTestState });

        const url = 'api/BrowserTest/status';
        const response = await fetch(url);
        const testStatus = await response.json();

        dispatch({ type: actionTypes.gotBrowserTestState, payload: testStatus });
    }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === actionTypes.getBrowserTestState) {
      return {
          ...state,
          updateInProgress: true
      };
  }

  if (action.type === actionTypes.gotBrowserTestState) {
      return {
          ...state,
          updateInProgress: false,
          running: action.payload.testStatus === 'running' ? true : false
      };
  }

  return state;
};

