import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppNavigation = ({ isAuthenticated, handleLogout, handleSearch  }) => (
  <nav className="navbar navbar-light bg-faded">
    <Link className="navbar-brand" to="/">
      <img src="/images/icon.png" className="icon" alt="Movie Advisor" />
    </Link>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <IndexLink className="nav-link" activeClassName="active"to="/">Movies</IndexLink>
      </li>
      { isAuthenticated &&
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/movies/recommended">Recommended</Link>
        </li>
      }
      { isAuthenticated &&
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/movies/watched">Watched</Link>
        </li>
      }
      {
        isAuthenticated &&
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/profile">Profile</Link>
        </li>
      }
    </ul>
    { !isAuthenticated &&
      <span className="nav-actions float-xs-right">
        <Link className="btn btn-secondary" to="signin">Sign in</Link>
        <Link className="btn btn-primary" to="signup">Sign up</Link>
      </span>
    }
    { isAuthenticated &&
      <span className="nav-actions float-xs-right">
        <Link className="btn btn-secondary" to="logout">Logout</Link>
      </span>
    }
    <form className="form-inline float-xs-right">
      <input className="form-control" type="text" placeholder="Search" id="searchField"/>
      <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
    </form>
  </nav>
)

export default AppNavigation;