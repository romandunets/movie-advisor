import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';
import movies from './movies';

const reducer = combineReducers({
  auth,
  users,
  form: formReducer,
  movies
});

export default reducer;
