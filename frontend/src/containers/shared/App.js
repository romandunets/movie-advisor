import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as authActions from '../../actions/authActions';
import * as movieActions from '../../actions/movieActions';
import AppNavigation from '../../components/shared/AppNavigation';
import AppFooter from '../../components/shared/AppFooter';

class App extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  // TODO: REFACTORING
  handleSearch(event) {
    if (event.charCode == 13) {
      event.preventDefault();
      var search = document.getElementById('searchField').value;
      if (search.length > 0) {
        const query = { search: search };
        this.props.actions.listMovies(query);
        browserHistory.push({ pathname: '/movies', query});
      }
      else {
        this.props.actions.listMovies();
        browserHistory.push('/movies');
      }
    }
  }

  render() {
    const { isAuthenticated, isAdmin } = this.props;
    const username = this.props.currentUser.username;
    return (
      <div className="container">
        <AppNavigation username={username} isAuthenticated={isAuthenticated} isAdmin={isAdmin} handleLogout={this.handleLogout.bind(this)} handleSearch={this.handleSearch.bind(this)} />
        <div className="content">{ this.props.children }</div>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.currentUser.roleName == 'admin'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...authActions, ...movieActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
