import React from "react";
import { shallow } from "enzyme";
import MessageContainer from "./MessageContainer";

describe("MessageContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MessageContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
