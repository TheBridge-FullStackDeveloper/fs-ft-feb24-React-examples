import React from "react";
import { shallow } from "enzyme";
import Contact from "./Contact";

describe("Contact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
