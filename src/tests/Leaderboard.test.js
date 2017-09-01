import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";

import Leaderboard from "./../components/Leaderboard";

describe("Leaderboard", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Leaderboard />, div)
  })

  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<Leaderboard {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Leaderboard")).toEqual(true);
  });
});
