import { GET_PICTURES } from "../actions/types";

const initialState = [];

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICTURES:
      return action.payload;
    default:
      return state;
  }
};

export default picturesReducer;
