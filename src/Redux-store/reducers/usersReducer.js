import { usersActionTypes } from "../actionTypes";

const initialState = {
  users: [],
  currentUser: null,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case usersActionTypes.ADD_USER:
      return state.concat([action.text]);
    case usersActionTypes.REMOVE_USER:
      return state.concat([action.text]);
    default:
      return state;
  }
}

export default usersReducer;
