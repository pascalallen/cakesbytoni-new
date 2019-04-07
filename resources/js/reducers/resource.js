import * as constants from '../constants';

export default function reducer(state = {
  all: [],
  single: {},
  links: {},
  fetching: false,
  fetched: false,
  updating: false,
  updated: false,
  error: null,
}, action) {
  switch (action.type) {
    case constants.FETCH_ALL: {
      return {
        ...state,
        fetching: true,
        all: [],
      };
    }
    case constants.FETCH_ALL_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        all: action.payload.data,
        links: action.payload.links,
      };
    }
    case constants.FETCH_SINGLE: {
      return {
        ...state,
        fetching: true,
        single: {},
      };
    }
    case constants.FETCH_SINGLE_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.FETCH_SINGLE_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        single: action.payload.data,
      };
    }
    case constants.NEW_RECORD: {
      return {
        ...state,
        fetching: true,
        single: {},
      };
    }
    case constants.NEW_RECORD_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.NEW_RECORD_SUCCESS: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        single: action.payload.data,
      };
    }
    case constants.UPDATE_RECORD: {
        return {
          ...state,
          updating: true,
          single: {},
        };
      }
      case constants.UPDATE_RECORD_ERROR: {
        return { ...state, updating: false, error: action.payload };
      }
      case constants.UPDATE_RECORD_SUCCESS: {
        return {
          ...state,
          updating: false,
          updated: true,
          single: action.payload.data,
        };
      }
  }

  return state;
}
