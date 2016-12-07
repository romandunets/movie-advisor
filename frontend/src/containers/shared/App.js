import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as authActions from '../../actions/authActions';
import AppNavigation from '../../components/shared/AppNavigation';
import AppFooter from '../../components/shared/AppFooter';

class App extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  // TODO: REFACTORING
  handleSearch(target) {
    if (target.charCode == 13) {
      event.preventDefault();
      var query = document.getElementById('searchField').value;
      if (query.length > 0) {
        browserHistory.push('/movies/search/' + query);
      }
      else {
        browserHistory.push('/');
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
    isAdmin: state.auth.currentUser.role == 'admin'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
