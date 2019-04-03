
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import HomePage from './components/HomePage';
// import Overview from './components/Overview';
// import Show from './components/Show';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/:resource" component={Overview} /> */}
        {/* <Route path="/:resource/:slug" component={Show}></Route> */}
      </div>
    </Router>
  </Provider>,
  document.getElementById('react')
);
