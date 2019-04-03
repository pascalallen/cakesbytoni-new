import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import resource from './resource';

export default combineReducers({
  form,
  resource,
});
