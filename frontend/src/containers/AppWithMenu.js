import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions'

class AppWithMenu extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  render() {
    return (
      <div>
        <div>
          <h2>React + Redux Skeleton</h2>
          <Link href="" onClick={ this.handleLogout.bind(this) }>Logout</Link>
        </div>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AppWithMenu);
