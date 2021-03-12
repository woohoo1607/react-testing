import React from "react";
import * as redux from "react-redux";
import { mount, shallow } from "enzyme";
import Status from "./index";
import { initialState } from "../../reducers/statusReducer";
import { changeStatus } from "../../actions/statusActions";

const state = {
  status: initialState,
};

describe("test redux", () => {
  it("shallow redux", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    useDispatchSpy.mockReturnValue(useDispatchSpy);

    const status = shallow(<Status />);
    const button = status.find(".status-btn").at(0);
    expect(status.find("p").text()).toEqual("not ready");
    button.simulate("click");
    expect(useDispatchSpy).toHaveBeenCalledWith(changeStatus("ready"));
  });

  it("mount redux", () => {
    jest
      .spyOn(redux, "useSelector")
      .mockImplementation((callback) => callback(state));

    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    useDispatchSpy.mockReturnValue(useDispatchSpy);

    const status = mount(<Status />);
    const button = status.find(".status-btn").at(0);
    expect(status.find("p").text()).toEqual("not ready");
    button.simulate("click");
    expect(useDispatchSpy).toHaveBeenCalledWith(changeStatus("ready"));
  });
});
