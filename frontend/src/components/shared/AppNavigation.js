import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppNavigation = ({ isAuthenticated, isAdmin, username, handleLogout, handleSearch  }) => (
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
      { isAuthenticated && isAdmin &&
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to="/users">Users</Link>
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
      <ul className="nav navbar-nav float-xs-right">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{username}</a>
          <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
            <Link className="dropdown-item" activeClassName="active" to="/profile">My profile</Link>
            <Link className="dropdown-item" to="#" onClick={handleLogout}>Logout</Link>
          </div>
        </li>
      </ul>
    }
    <form className="form-inline float-xs-right">
      <input className="form-control" type="text" placeholder="Search" id="searchField" onKeyPress={handleSearch}/>
    </form>
  </nav>
)

export default AppNavigation;