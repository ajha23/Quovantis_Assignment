import { useDispatch, useSelector } from "react-redux";

import { signInSucess, signInFailure } from "./user.actions";
import { selectToken, selectError } from "./user.selectors";

export const useUserState = () => {
  return {
    token: useSelector(selectToken),
    error: useSelector(selectError),
  };
};

export const useUserDispatch = () => {
  const dispatch = useDispatch();
  return {
    signInSucess: (token) => dispatch(signInSucess(token)),
    signInFailure: (error) => dispatch(signInFailure(error)),
  };
};
