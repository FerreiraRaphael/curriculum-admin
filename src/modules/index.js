import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import work from "./work";

export default combineReducers({
  counter,
  auth,
  work
});
