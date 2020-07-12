import { SIGN_IN_FAILURE, SIGN_IN_SUCCESS } from "./user.types";
const INITIAL_STATE = {
  token: null,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
