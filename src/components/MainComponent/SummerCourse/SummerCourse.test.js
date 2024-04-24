import React from "react";
import { shallow } from "enzyme";
import SummerCourse from "./SummerCourse";

describe("SummerCourse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SummerCourse />);
    expect(wrapper).toMatchSnapshot();
  });
});
