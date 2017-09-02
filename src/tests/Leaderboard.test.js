import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { Leaderboard } from "./../components/Leaderboard";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("Leaderboard", () => {
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Leaderboard store={mockStore} />, div);
  // });

  let component;
  let props;
  beforeEach(() => {
    props = {
      selection: "recent",
      recentCampers: [{
        username: "Loading",
        img: "#",
        alltime: 42,
        recent: 11,
        lastUpdate: "2017-08-28T12:02:59.754Z"
      }],
      store: mockStore
    };
    component = shallow(<Leaderboard store={mockStore} {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Leaderboard")).toEqual(true);
  });

  it("matches snapshot", () => {
    const comp = shallow(<Leaderboard store={mockStore} {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
