/*
import React from "react";
import Counter from "./index";
import { mountWithTheme, shallowWithTheme } from "../../testWrappers";

describe("test Counter component", () => {
  it("shallow counter", () => {
    const counter = shallowWithTheme(<Counter />)
      .find(Counter)
      .dive();
    expect(counter.find(".counter-btn")).toHaveLength(1);
    expect(counter.find("p")).toHaveLength(1);
    const button = counter.find(".counter-btn").at(0);
    expect(counter.find("p").text()).toEqual("0");
    button.simulate("click");
    expect(counter.find("p").text()).toEqual("1");
  });

  it("mount counter", () => {
    const counter = mountWithTheme(<Counter />);
    const button = counter.find(".counter-btn").at(0);
    expect(counter.find("p").text()).toEqual("0");
    button.simulate("click");
    expect(counter.find("p").text()).toEqual("1");
  });
});
*/
