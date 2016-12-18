import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/shared/App';

import HomePage from './containers/home/HomePage';

import SigninPage from './containers/auth/SigninPage';
import SignupPage from './containers/auth/SignupPage';

import UsersListPage from './containers/users/UsersListPage';
import UserPage from './containers/users/UserPage';
import UserNewPage from './containers/users/UserNewPage';
import UserEditPage from './containers/users/UserEditPage';

import MoviePage from './containers/movies/MoviePage';
import MoviesListPage from './containers/movies/MoviesListPage';
import RecommendedMoviesListPage from './containers/movies/RecommendedMoviesListPage';
import WatchedMoviesListPage from './containers/movies/WatchedMoviesListPage';
import MoviesSearchPage from './containers/movies/MoviesSearchPage';
import MovieNewPage from './containers/movies/MovieNewPage';
import MovieEditPage from './containers/movies/MovieEditPage';

export default (store) => {
  return (
    <Route path="/">
      <Route path="signin" component={SigninPage} />
      <Route path="signup" component={SignupPage} />

      <Route component={App}>
        <IndexRoute component={HomePage} />

        <Route path="profile" component={UserPage} />

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
          <Route path="recommended" component={RecommendedMoviesListPage} />
          <Route path="watched" component={WatchedMoviesListPage} />
          <Route path=":id" component={MoviePage} />
          <Route path=":id/edit" component={MovieEditPage} />
        </Route>
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
