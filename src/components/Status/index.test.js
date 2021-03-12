import React from "react";
import * as redux from "react-redux";
import Status from "./index";
import { initialState } from "../../reducers/statusReducer";
import { changeStatus } from "../../actions/statusActions";
import { mountWithTheme, shallowWithTheme } from "../../../testWrappers";

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

    const status = shallowWithTheme(<Status />)
      .find(Status)
      .dive();
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

    const status = mountWithTheme(<Status />);
    const button = status.find(".status-btn").at(0);
    expect(status.find("p").text()).toEqual("not ready");
    button.simulate("click");
    expect(useDispatchSpy).toHaveBeenCalledWith(changeStatus("ready"));
  });
});
