import React from "react";
import { shallow } from "enzyme";
import Staff from "./Staff";

describe("Staff", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Staff />);
    expect(wrapper).toMatchSnapshot();
  });
});
