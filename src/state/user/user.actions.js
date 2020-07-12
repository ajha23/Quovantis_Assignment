import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from "./user.types";

export const signInSucess = (token) => ({
  type: SIGN_IN_SUCCESS,
  payload: token,
});
export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});
