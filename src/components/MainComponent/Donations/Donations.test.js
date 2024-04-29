import React from "react";
import { shallow } from "enzyme";
import Donations from "./Donations";

describe("Donations", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Donations />);
    expect(wrapper).toMatchSnapshot();
  });
});
