export const UPDATE_STATUS = "UPDATE_STATUS";

export const initialState = {
  status: "not ready",
};

const statusReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_STATUS: {
      return {
        status: payload,
      };
    }

    default:
      return state;
  }
};

export default statusReducer;
