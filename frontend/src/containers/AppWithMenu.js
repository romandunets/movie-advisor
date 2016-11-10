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
      <div className="container">
        <nav className="navbar navbar-light bg-faded navbar-full">
          <Link className="navbar-brand" to="/">Movie Advisor</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/recommended">Recommended</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/rated">Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies/watched">Watched</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users/1">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="" onClick={ this.handleLogout.bind(this) }>Logout</Link>
            </li>
          </ul>
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </nav>
        <div className="container content">
          <div>{ this.props.children }</div>
        </div>
        <footer>
          <p>Copyright &copy; Movie Advisor 2016</p>
        </footer>
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
