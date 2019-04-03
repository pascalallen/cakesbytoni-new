import * as constants from '../constants';

export default function reducer(state = {
  data: {},
  params: {
    pages: -1,
    pageSize: 5,
    loading: true,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case constants.FETCH_ALL: {
      return {
        ...state,
        fetching: true,
        data: {},
        params: { ...state.params, loading: true },
      };
    }
    case constants.FETCH_ALL_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.FETCH_ALL_SUCCESS: {
      const params = {
        pages: action.payload.last_page,
        pageSize: action.payload.per_page,
        loading: false,
      };
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        params,
      };
    }
    case constants.FETCH_SINGLE: {
      return {
        ...state,
        fetching: true,
        data: {},
        params: { ...state.params, loading: true },
      };
    }
    case constants.FETCH_SINGLE_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.FETCH_SINGLE_SUCCESS: {
      const params = {
        pages: action.payload.last_page,
        pageSize: action.payload.per_page,
        loading: false,
      };
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        params,
      };
    }
    case constants.NEW_RECORD: {
      return {
        ...state,
        fetching: true,
        data: {},
        params: { ...state.params, loading: true },
      };
    }
    case constants.NEW_RECORD_ERROR: {
      return { ...state, fetching: false, error: action.payload };
    }
    case constants.NEW_RECORD_SUCCESS: {
      const params = {
        loading: false,
      };
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        params,
      };
    }
  }

  return state;
}
