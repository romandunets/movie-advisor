import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppNavigation = ({ isAuthenticated, handleLogout, handleSearch  }) => (
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
        {
      	  isAuthenticated &&
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/profile">Profile</Link>
          </li>
        }
      <li className="nav-item">
        {
          isAuthenticated &&
          <div>
            <Link className="nav-link" to="" onClick={handleLogout}>Logout</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </div>
        }
      </li>
    </ul>
    <form className="form-inline pull-xs-right">
      <input className="form-control" type="text" placeholder="Search" id="searchField"/>
      <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
    </form>
  </nav>
)

export default AppNavigation;