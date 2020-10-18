import * as actions from "../constants/actions";

export const startGame = () => ({
  type: actions.START_GAME,
});

export const selectProfile = id => ({
  type: actions.SELECT_PROFILE,
  profileId: id
});