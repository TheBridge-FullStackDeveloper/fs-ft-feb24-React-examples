import React from "react";
import { shallow } from "enzyme";
import CardContact from "./CardContact";

describe("CardContact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardContact />);
    expect(wrapper).toMatchSnapshot();
  });
});
