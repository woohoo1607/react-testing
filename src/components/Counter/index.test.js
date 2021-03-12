import React from "react";
import { mount, shallow } from "enzyme";
import Counter from "./index";

describe("test Counter component", () => {
  it("shallow counter", () => {
    const counter = shallow(<Counter />);
    expect(counter.find(".counter-btn")).toHaveLength(1);
    expect(counter.find(".counter")).toHaveLength(1);
    const button = counter.find(".counter-btn").at(0);
    expect(counter.find(".counter").text()).toEqual("0");
    button.simulate("click");
    expect(counter.find(".counter").text()).toEqual("1");
  });

  it("mount counter", () => {
    const counter = mount(<Counter />);
    const button = counter.find(".counter-btn").at(0);
    expect(counter.find(".counter").text()).toEqual("0");
    button.simulate("click");
    expect(counter.find(".counter").text()).toEqual("1");
  });
});
