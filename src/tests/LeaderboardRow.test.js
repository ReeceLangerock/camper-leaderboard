import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import LeaderboardRow from "./../components/LeaderboardRow";
import enzymeSerializer from "enzyme-to-json/serializer";

expect.addSnapshotSerializer(enzymeSerializer);
describe("LeaderboardRow", () => {
  // it("renders without crashing", () => {
  //   const table = document.createElement("table");
  //   ReactDOM.render(<LeaderboardRow />, table);
  // });

  let component,props, camper;
  beforeEach(() => {
    props = {};
    camper = {
      username: "Loading",
      img: "#",
      alltime: 42,
      recent: 11,
      lastUpdate: "2017-08-28T12:02:59.754Z"
    };
    component = shallow(<LeaderboardRow key={1} camper={camper} {...props} />);
  });

 
});

describe("Snapshot LeaderboardRow", () => {
  let component,props, camper;
  beforeEach(() => {
    props = {};
    camper = {
      username: "Loading",
      img: "#",
      alltime: 42,
      recent: 11,
      lastUpdate: "2017-08-28T12:02:59.754Z"
    };
  });
  it("matches snapshot", () => {
    const comp = mount(<LeaderboardRow camper={camper} {...props}/>);
    expect(comp).toMatchSnapshot();
  });
});
