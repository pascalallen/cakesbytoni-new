import axios from 'axios/index';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from '../constants';

const baseUrl = '/api';

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: FETCH_USER });
    axios.get(`${baseUrl}/user`)
      .then(
        (response) => {
          dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
        },
        (err) => {
          dispatch({ type: FETCH_USER_ERROR, payload: err });
        },
      );
  };
}
