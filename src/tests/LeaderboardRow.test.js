import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import LeaderboardRow from "./../components/LeaderboardRow";
import enzymeSerializer from "enzyme-to-json/serializer";

expect.addSnapshotSerializer(enzymeSerializer);
describe("LeaderboardRow", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LeaderboardRow />, div);
  });

  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<LeaderboardRow {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("LeaderboardRow")).toEqual(true);
  });
});

describe("Snapshot LeaderboardRow", () => {
  it("matches snapshot", () => {
    const comp = mount(<LeaderboardRow />);
    expect(comp).toMatchSnapshot();
  });
});
