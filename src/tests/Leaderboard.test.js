import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";

import Leaderboard from "./../components/Leaderboard";

describe("Leaderboard", () => {
  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<Leaderboard {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Leaderboard")).toEqual(true);
  });
});
