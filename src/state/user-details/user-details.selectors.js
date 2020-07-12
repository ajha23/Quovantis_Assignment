import { createSelector } from "reselect";

const selectUserDetails = (state) => state.userDetails;

export const selectUserDetailsData = createSelector(
  [selectUserDetails],
  (userDetails) => userDetails.data
);
