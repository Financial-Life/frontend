import { combineReducers } from "redux";
import { RESET_REDUCERS } from "../constants/actions";
import onboarding from "./onboarding";
import profile from "./profile";

const appReducer = combineReducers({
  onboarding,
  profile
});

export default (state, action) => {
  if (action.type === RESET_REDUCERS) {
    state = undefined;
  }

  return appReducer(state, action);
};
