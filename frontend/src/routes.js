import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/shared/App';

import LoginPage from './containers/auth/LoginPage';
import SignupPage from './containers/auth/SignupPage';

import UsersListPage from './containers/users/UsersListPage';
import UserPage from './containers/users/UserPage';
import UserNewPage from './containers/users/UserNewPage';
import UserEditPage from './containers/users/UserEditPage';

import MoviePage from './containers/movies/MoviePage';
import MoviesListPage from './containers/movies/MoviesListPage';
import MoviesSearchPage from './containers/movies/MoviesSearchPage';
import MovieNewPage from './containers/movies/MovieNewPage';
import MovieEditPage from './containers/movies/MovieEditPage';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={MoviesListPage} />

      <Route path="signin" component={LoginPage} />
      <Route path="signup" component={SignupPage} />

      <Route path="users" onEnter={requireAuthentication(store)}>
        <IndexRoute component={UsersListPage} />
        <Route path="new" component={UserNewPage} />
        <Route path=":id" component={UserPage} />
        <Route path=":id/edit" component={UserEditPage} />
      </Route>

      <Route path="movies" onEnter={requireAuthentication(store)}>
        <IndexRoute component={MoviesListPage} />
        <Route path="new" component={MovieNewPage} />
        <Route path="search/:keyword" component={MoviesSearchPage} />
        <Route path="rated" component={MoviesListPage} />
        <Route path="watched" component={MoviesListPage} />
        <Route path="recommended" component={MoviesListPage} />
        <Route path=":id" component={MoviePage} />
        <Route path=":id/edit" component={MovieEditPage} />
      </Route>
    </Route>
  )
};

const requireAuthentication = (store) => {
  return (nextState, replaceState) => {
    const state = store.getState();
    if (!state.auth.isAuthenticated && localStorage.getItem("token") === null) {
      replaceState({ pathname: '/signin', nextPathname: nextState.location.pathname });
    }
  }
}
