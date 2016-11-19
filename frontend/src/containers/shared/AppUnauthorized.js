import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

import * as authActions from '../actions/authActions'

class AppWithMenu extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.actions.logout();
  }

  handleSearch(event) {
    event.preventDefault();
    var query = document.getElementById('searchField').value;
    if (query.length > 0) {
      browserHistory.push('/movies/search/' + query);
    }
    else {
      browserHistory.push('/');
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-faded navbar-full">
          <Link className="navbar-brand" to="/">Movie Advisor</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item ">
              <IndexLink className="nav-link" activeClassName="active"to="/">All</IndexLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/movies/recommended">Recommended</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/movies/rated">Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/movies/watched">Watched</Link>
            </li>
            {isAuthenticated &&
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/users/1">Profile</Link>
              </li>
            }
            <li className="nav-item">
              {isAuthenticated &&
                <Link className="nav-link" to="" onClick={ this.handleLogout.bind(this) }>Logout</Link>:
                <Link className="nav-link" to="/login">Login</Link>
              }
            </li>
          </ul>
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search" id="searchField"/>
            <button className="btn btn-outline-success" onClick={this.handleSearch.bind(this)}>Search</button>
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithMenu);
