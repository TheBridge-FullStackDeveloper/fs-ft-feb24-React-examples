import React from "react";
import { shallow } from "enzyme";
import TravelItem from "./TravelItem";

describe("TravelItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TravelItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
