import { combineReducers } from "redux";

interface Action {
  type: string;
  payload: object;
}

const gameInventory = (state = [], action: Action) => {
  switch (action.type) {
    case "SET_GAMES":
      return action.payload;
    default:
      return state;
  }
};

const gameDetails = (state = {}, action: Action) => {
  switch (action.type) {
    case "SET_GAMES_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  gameInventory,
  gameDetails,
});
