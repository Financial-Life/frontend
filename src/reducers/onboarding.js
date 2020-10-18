import * as actions from "../constants/actions";

const initialState = {
  gameStarted: false,
  skipped: false
};

const onboarding = (state = initialState, action) => {
  switch (action.type) {
    case actions.SKIP_ONBOARDING:
    case actions.START_GAME:
      return {
        ...state,
        skipped: true
      };
    default:
      return state;
  }
};

export default onboarding;
