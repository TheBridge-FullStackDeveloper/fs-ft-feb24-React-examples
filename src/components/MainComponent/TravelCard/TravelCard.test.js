import React from "react";
import { shallow } from "enzyme";
import TravelCard from "./TravelCard";

describe("TravelCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TravelCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
