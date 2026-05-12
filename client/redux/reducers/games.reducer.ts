import { combineReducers } from "redux";

export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  status: string;
  notes: string;
}

interface Action {
  type: string;
  payload: Game[] | Game | object;
}

const gameInventory = (state: Game[] = [], action: Action): Game[] => {
  switch (action.type) {
    case "SET_GAMES":
      return action.payload as Game[];
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
