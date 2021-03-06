import axios from 'axios/index';
import * as constants from '../constants';

const baseUrl = '/api';

export function fetchSingle(component, slug, optionalParams = {}) {
  return (dispatch) => {
    dispatch({ type: constants.FETCH_SINGLE });
    axios.get(`${baseUrl}/${component}/${slug}`, {
      params: optionalParams,
    })
      .then((response) => {
        dispatch({
          type: constants.FETCH_SINGLE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: constants.FETCH_SINGLE_ERROR, payload: err });
      });
  };
}

export function fetchAll(component, optionalParams = {}) {
  return (dispatch) => {
    dispatch({ type: constants.FETCH_ALL });
    axios.get(`${baseUrl}/${component}`, {
      params: optionalParams,
    })
      .then((response) => {
        dispatch({
          type: constants.FETCH_ALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: constants.FETCH_ALL_ERROR, payload: err });
      });
  };
}

export function newRecord(component, params = {}) {
  return (dispatch) => {
    dispatch({ type: constants.NEW_RECORD });
    axios.post(`${baseUrl}/${component}`, params)
      .then((response) => {
        dispatch({
          type: constants.NEW_RECORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: constants.NEW_RECORD_ERROR, payload: err });
      });
  };
}

export function updateRecord(component, slug, params = {}) {
    return (dispatch) => {
      dispatch({ type: constants.UPDATE_RECORD });
      axios.put(`${baseUrl}/${component}/${slug}`, params)
        .then((response) => {
          dispatch({
            type: constants.UPDATE_RECORD_SUCCESS,
            payload: response.data,
          });
        })
        .catch((err) => {
          dispatch({ type: constants.UPDATE_RECORD_ERROR, payload: err });
        });
    };
  }
