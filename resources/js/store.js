import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

let middleware = [promise(), thunk];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));
