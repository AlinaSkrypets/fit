import { combineReducers } from "redux";
import exercisesReducer from "./exercisesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  exercises: exercisesReducer,
  users: usersReducer,
});
