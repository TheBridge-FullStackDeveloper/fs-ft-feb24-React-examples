import React from "react";
import { shallow } from "enzyme";
import TravelList from "./TravelList";

describe("TravelList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TravelList />);
    expect(wrapper).toMatchSnapshot();
  });
});
