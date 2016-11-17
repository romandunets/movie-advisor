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

import MoviesPage from './containers/movies/MoviesPage';
import MovieSearchPage from './containers/movies/MovieSearchPage';
import MovieDetailPage from './containers/movies/MovieDetailPage';
import MovieNewPage from './containers/movies/MovieNewPage';
import MovieEditPage from './containers/movies/MovieEditPage';

export default (store) => {
  return (
    <Route path="/" component={AppWithMenu}>

      <IndexRoute component={MoviesPage} />

      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignupPage} />

      <Route path="movies">
        <IndexRoute component={MoviesPage} />
        <Route path="new" component={MovieNewPage} />
        <Route path="search/:keyword" component={MovieSearchPage} />
        <Route path="rated" component={MoviesPage} />
        <Route path="watched" component={MoviesPage} />
        <Route path="recommended" component={MoviesPage} />
        <Route path=":id" component={MovieDetailPage} />
        <Route path=":id/edit" component={MovieEditPage} />
      </Route>

      <Route path="users" onEnter={requireAuthentication(store)}>
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