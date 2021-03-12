import React from "react";
import { mount, shallow } from "enzyme";
import Button from "./index";

describe("test Button component", () => {
  const title = "button title";
  it("shallow button", () => {
    const button = shallow(<Button title={title} />);
    expect(button.contains(title)).toBe(true);
  });

  it("mount button", () => {
    const button = mount(<Button title={title} />);
    expect(button.contains(title)).toBe(true);
  });
});
