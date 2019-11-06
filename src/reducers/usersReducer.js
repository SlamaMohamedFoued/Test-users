import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions/types";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return state.filter(user => user._id !== action.id);
    case UPDATE_USER:
      return state.map(user =>
        user._id === action.payload.id ? action.payload : user
      );
    default:
      return state;
  }
};

export default usersReducer;
