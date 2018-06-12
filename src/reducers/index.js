import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import settings from './settings';
import maze from './maze';

export default combineReducers({
  form: reducerForm,
  settings,
  maze,
});
