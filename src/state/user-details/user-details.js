import { useDispatch, useSelector } from "react-redux";

import { fetchUserData } from "./user-details.actions";
import { selectUserDetailsData } from "./user-details.selectors";

export const useUserDetailsState = () => ({
  data: useSelector(selectUserDetailsData),
});

export const useUserDetailsDispatch = () => {
  const dispatch = useDispatch();
  return {
    fetchUserDetails: (data) => dispatch(fetchUserData(data)),
  };
};
