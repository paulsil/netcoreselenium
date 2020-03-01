import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { actionTypes, actionCreators } from '../UserActions'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import "regenerator-runtime/runtime";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {

    afterEach(() => {
        fetchMock.restore();
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {

        const store = mockStore({
            user: {
                loggingIn: false,
                loggedIn: false,
                loggingOut: false,
                name: '',
                members: []
            }
        })

        fetchMock.getOnce('/api/join?name=Bob',
            {
                body: { success: true, errors: [] },
                headers: { 'content-type': 'application/json' }
            });

        const expectedActions = [
            { type: actionTypes.USER_LOGGING_IN, name: 'Bob' },
            { type: actionTypes.USER_LOGGED_IN, name: 'Bob' }
        ]

        store.dispatch(actionCreators.logIn('Bob')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})