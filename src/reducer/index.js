import { combineReducers } from "redux";
import { demoReducer } from "./demoReducer";
import { homeReducer } from "./homeReducer";
import { artistReducer } from "./artistsReducer";

export default combineReducers({
  demoReducer,
  homeReducer,
  artistReducer
});
