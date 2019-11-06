import { combineReducers } from "redux";
import picturesReducer from "./picturesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  pictures: picturesReducer,
  users: usersReducer
});
