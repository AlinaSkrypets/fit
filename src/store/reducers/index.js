import exercisesReducer from "./exercisesReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  exercises: exercisesReducer,
  users: usersReducer,
});

export default rootReducer;
