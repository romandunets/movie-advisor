import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import users from './users';

const reducer = combineReducers({
  auth,
  users,
  form: formReducer
});

export default reducer;
