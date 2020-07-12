import { FETCH_USER_DATA } from "./user-details.types";

export const fetchUserData = (data) => ({
  type: FETCH_USER_DATA,
  payload: data,
});
