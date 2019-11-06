import axios from "axios";
import { GET_USERS, DELETE_USER, ADD_USER, UPDATE_USER } from "./types";

export const getUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteUser = id => dispatch => {
  axios.delete(`/api/users/${id}`).then(
    dispatch({
      type: DELETE_USER,
      payload: id
    })
  );
};

export const addUser = user => dispatch => {
  axios.post("/api/users/", user).then(
    dispatch({
      type: ADD_USER,
      payload: user
    })
  );
};

export const updateUser = user => dispatch => {
  axios.put("/api/users/:id", user).then(
    dispatch({
      type: UPDATE_USER,
      payload: user
    })
  );
};
