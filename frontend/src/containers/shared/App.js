import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as authActions from '../../actions/authActions';
import * as movieActions from '../../actions/movieActions';
import MessageBox from '../../components/shared/MessageBox';
import AppNavigation from '../../components/shared/AppNavigation';
import AppFooter from '../../components/shared/AppFooter';

class App extends Component {
  // TODO: REFACTORING
  handleSearch(event) {
    if (event.charCode == 13) {
      event.preventDefault();
      var search = document.getElementById('searchField').value;
      if (search.length > 0) {
        const query = { free_search: search };
        this.props.actions.listMovies(this.props.currentUser.id, query);
        browserHistory.push({ pathname: '/movies', query});
      }
      else {
        this.props.actions.listMovies(this.props.currentUser.id);
        browserHistory.push('/movies');
      }
    }
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    const { message, currentUser, isAuthenticated, isAdmin } = this.props;
    const { query, pathname } = this.props.location;

    return (
      <div className="container">
        <AppNavigation username={currentUser.username} free_search={query.free_search} pathname={pathname} isAuthenticated={isAuthenticated} isAdmin={isAdmin} handleSearch={this.handleSearch.bind(this)} handleLogout={this.handleLogout.bind(this)} />
        <MessageBox message={message} />
        <div className="content">{ this.props.children }</div>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.users.message || state.movies.message || state.auth.message,
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...authActions, ...movieActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
