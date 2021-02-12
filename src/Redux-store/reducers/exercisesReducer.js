import { exercisesActionTypes } from "../actionTypes";
const initialState = {
  exerciseList: [],
  loading: false,
};

function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case exercisesActionTypes.ADD_EXERCISE:
      return {};
    // return {
    //   ...state,
    //   exerciseList: [],
    // };
    case exercisesActionTypes.REMOVE_EXERCISE:
      return state.concat([action.text]);
    case exercisesActionTypes.EXERCISE_UP:
      return state.concat([action.text]);
    case exercisesActionTypes.EXERCISE_DOWN:
      return state.concat([action.text]);
    default:
      return state;
  }
}

export default exercisesReducer;
