import { UPDATE_STATUS } from "../reducers/statusReducer";

export const changeStatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});
