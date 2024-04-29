import React from "react";
import { shallow } from "enzyme";
import CounterContainer from "./CounterContainer";

describe("CounterContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CounterContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
