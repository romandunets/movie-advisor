import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import AppWithMenu from './containers/AppWithMenu';

import LoginPage from './containers/auth/LoginPage';
import SignupPage from './containers/auth/SignupPage';

import UsersListPage from './containers/users/UsersListPage';
import UserPage from './containers/users/UserPage';
import UserNewPage from './containers/users/UserNewPage';
import UserEditPage from './containers/users/UserEditPage';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRedirect to="/users" />

      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignupPage} />

      <Route path="users" component={AppWithMenu} onEnter={requireAuthentication(store)}>
        <IndexRoute component={UsersListPage} />
        <Route path="new" component={UserNewPage} />
        <Route path=":id" component={UserPage} />
        <Route path=":id/edit" component={UserEditPage} />
      </Route>
    </Route>
  )
};

const requireAuthentication = (store) => {
  return (nextState, replaceState) => {
    const state = store.getState();
    if (!state.auth.isAuthenticated && localStorage.getItem("token") === null) {
      replaceState({ pathname: '/login', nextPathname: nextState.location.pathname });
    }
  }
}
