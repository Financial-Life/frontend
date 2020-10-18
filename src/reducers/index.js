import { combineReducers } from "redux";
import { RESET_REDUCERS } from "../constants/actions";

const appReducer = combineReducers({
});

export default (state, action) => {
  if (action.type === RESET_REDUCERS) {
    state = undefined;
  }

  return appReducer(state, action);
};
