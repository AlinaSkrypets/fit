import { exercisesActionTypes } from "../actionTypes/index";

export const addExercise = (payload) => ({
  type: exercisesActionTypes.ADD_EXERCISE,
  payload: payload,
});

export const removeExercise = (payload) => ({
  type: exercisesActionTypes.REMOVE_EXERCISE,
  payload: payload,
});

export const exerciseUp = (payload) => ({
  type: exercisesActionTypes.EXERCISE_UP,
  payload: payload,
});

export const exerciseDown = (payload) => ({
  type: exercisesActionTypes.EXERCISE_DOWN,
  payload: payload,
});
