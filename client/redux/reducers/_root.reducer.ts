import { combineReducers } from "redux";
import games from "./games.reducer";

const rootReducer = combineReducers({
  games,
});

export default rootReducer;
