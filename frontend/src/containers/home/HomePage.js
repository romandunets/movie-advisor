import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as movieActions from '../../actions/movieActions';
import MoviesListSimple from '../../components/movies/MoviesListSimple';

class HomePage extends Component {
  componentWillMount() {
    this.props.actions.listMovies({ ...this.props.location.query });
  }

  render() {
    const { movies, message, total, isAuthenticated, isAdmin } = this.props;
    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title">Welcome to Movie Advisor!</h3>
          <div className="homepage-text">
            <p>With Movie Advisor you can quickly find movies you really like.
            We analyze your ratings of movies to recommend only relevant movies to you. 
            The results will improve, if you rate more movies. 
            You can also follow friends with similar taste and get even better recommendations.</p>
            <p className="text-center"><b><Link to="/signup">Sign up</Link></b> for free or <b><Link to="/signin">Login</Link></b> if you already have an account.</p>
          </div>
          <h4 className="title">Top movies</h4> 
          <MoviesListSimple movies={movies} isAuthenticated={isAuthenticated} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);