import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class AppNavigation extends Component {
  render() {
    const { isAuthenticated, isAdmin, username, free_search, pathname, handleLogout, handleSearch } = this.props;
    const isMoviesPage = (pathname == '/movies');

    return (
      <div className="navigation">
        <nav className="navbar navbar-light bg-faded">
          <Link className="navbar-brand" to="/">
            <img src="/images/icon.png" className="icon" alt="Movie Advisor" />
          </Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <IndexLink className="nav-link" activeClassName="active"to="/movies">Movies</IndexLink>
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
          { !isMoviesPage &&
            <form className="form-inline float-xs-right">
              <input className="form-control" type="text" placeholder="Search" id="searchField" value={ free_search } onKeyPress={handleSearch}/>
            </form>
          }
        </nav>
      </div>
    );
  }
}

export default AppNavigation;