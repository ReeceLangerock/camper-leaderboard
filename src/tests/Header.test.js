import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";

import Header from "./../components/Header";

expect.addSnapshotSerializer(enzymeSerializer);

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<Header {...props} />);
  });

  it("renders page title", () => {
    const title = <h1>FCC Camper Leaderboard</h1>;
    expect(component.contains(title)).toEqual(true);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Header")).toEqual(true);
  });
});

describe("Snapshot Header", () => {
  it("matches snapshot", () => {
    const comp = mount(<Header />);
    expect(comp).toMatchSnapshot();
  });
});
