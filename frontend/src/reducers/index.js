import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';
import movies from './movies';

const reducer = combineReducers({
  auth,
  users,
  movies,
  form: formReducer
});

export default reducer;
