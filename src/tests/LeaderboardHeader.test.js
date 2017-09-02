import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";

import {LeaderboardHeader} from "./../components/LeaderboardHeader";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("LeaderboardHeader", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LeaderboardHeader store={mockStore} />, div);
  });

  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<LeaderboardHeader store={mockStore} {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("LeaderboardHeader")).toEqual(true);
  });

  describe("Snapshot LeaderboardHeader", () => {
    it("matches snapshot", () => {
      const comp = mount(<LeaderboardHeader store={mockStore} />);
      expect(comp).toMatchSnapshot();
    });
  });
});
