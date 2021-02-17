import { exercisesActionTypes } from "../actionTypes";
const initialState = {
  // exercisesList: localStorage.getItem(),
  exercisesList: [],
  loading: false,
};

function exercisesReducer(state = initialState, action) {
  switch (action.type) {

    // ADD NEW EXERCISE
    case exercisesActionTypes.ADD_EXERCISE:
      return {
        ...state,
        exercisesList: [...state.exercisesList, action.payload],
      };

    // REMOVE EXERCISE
    case exercisesActionTypes.REMOVE_EXERCISE:
      const exercisesListCopy1 = [...state.exercisesList];
      exercisesListCopy1.splice(action.payload, 1);
      return {
        ...state,
        exercisesList: exercisesListCopy1,
      };

    // MOVE EXERCISE UP
    case exercisesActionTypes.EXERCISE_UP:
        const exercisesListCopy2 = [...state.exercisesList];
        const temp1 = exercisesListCopy2[action.payload];
        exercisesListCopy2[action.payload]=exercisesListCopy2[action.payload-1];
        exercisesListCopy2[action.payload-1] = temp1;
        return {
          ...state,
          exercisesList: exercisesListCopy2
        };

    // MOVE EXERCISE DOWN
    case exercisesActionTypes.EXERCISE_DOWN:
      const exercisesListLength = state.exercisesList.length;
      if(action.payload !== exercisesListLength ) {
        const exercisesListCopy3 = [...state.exercisesList];
        [exercisesListCopy3[action.payload],exercisesListCopy3[action.payload+1]] = [exercisesListCopy3[action.payload+1],exercisesListCopy3[action.payload]]
        return {
          ...state,
          exercisesList: exercisesListCopy3
        };
      }
      
    break
    default:
      return state;
  }
}

export default exercisesReducer;
