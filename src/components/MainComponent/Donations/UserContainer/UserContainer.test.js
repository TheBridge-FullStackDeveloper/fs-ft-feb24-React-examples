import React from "react";
import { shallow } from "enzyme";
import UserContainer from "./UserContainer";

describe("UserContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
