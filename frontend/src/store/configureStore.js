import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default function configureStore() {
  const middleware = applyMiddleware(thunk);
  return createStore(reducer, middleware);
}
