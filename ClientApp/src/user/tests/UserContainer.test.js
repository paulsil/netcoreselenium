import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserContainer from "../Components/UserContainer";
import { shallow, mount, render } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Testpage Component", () => {
    it("should render without throwing an error", () => {

        const result = shallow(
            <Provider store={store}>
                <UserContainer />
            </Provider>
        );

        // expect(
        //    result.dive().dive().exists(<h1>Test page</h1>)
        // ).toBe(true);
    });
});