import { FETCH_USER_DATA } from "./user-details.types";

const INITIAL_STATE = {
  data: [],
};

export const userDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
