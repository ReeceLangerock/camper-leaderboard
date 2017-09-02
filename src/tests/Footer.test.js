import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";

import Footer from "./../components/Footer";
import enzymeSerializer from "enzyme-to-json/serializer";

expect.addSnapshotSerializer(enzymeSerializer);

describe("Footer", () => {
 

  let component;
  beforeEach(() => {
    const props = {};
    component = mount(<Footer {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Footer")).toEqual(true);
  });
});

describe("Snapshot Footer", () => {
  it("matches snapshot", () => {
    const comp = mount(<Footer />);
    expect(comp).toMatchSnapshot();
  });
});
