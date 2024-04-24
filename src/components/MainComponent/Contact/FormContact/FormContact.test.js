import React from "react";
import { shallow } from "enzyme";
import FormContact from "./FormContact";

describe("FormContact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormContact />);
    expect(wrapper).toMatchSnapshot();
  });
});
