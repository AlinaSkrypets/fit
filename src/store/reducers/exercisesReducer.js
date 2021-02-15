import { exercisesActionTypes } from "../actionTypes";
const initialState = {
  exerciseList: [],
  loading: false,
};

function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case exercisesActionTypes.ADD_EXERCISE:
      console.log("state.exerciseList=" + state.exerciseList);

      return {
        ...state,
        exerciseList: [...state.exerciseList, { a: 2, b: 333 }],
      };
    // case exercisesActionTypes.REMOVE_EXERCISE:
    //   return state.concat([action.text]);
    // case exercisesActionTypes.EXERCISE_UP:
    //   return state.concat([action.text]);
    // case exercisesActionTypes.EXERCISE_DOWN:
    //   return state.concat([action.text]);
    default:
      return state;
  }
}

export default exercisesReducer;
