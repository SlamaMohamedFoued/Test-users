import axios from "axios";
import { GET_PICTURES } from "./types";

export const getPictures = userId => dispatch => {
  axios
    .get(`/api/picture/${userId}`)
    .then(res =>
      dispatch({
        type: GET_PICTURES,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
