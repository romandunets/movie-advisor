import Api from './Api';

const baseParams = {
  per_page: 5
}

class MovieApi extends Api {
  static listMovies(userId, parameters) {
    const params = { ...baseParams, ...parameters, user_id: userId };
    return this.getClient().get(`/movie/list`, { params });
  }

  static listRecommendedMovies(userId, parameters) {
    const params = { ...baseParams, ...parameters };
    return this.getClient().get(`/movie/recommend/${userId}`, { params });
  }

  static listWatchedMovies(userId, parameters) {
    const params = { ...baseParams, ...parameters, user_id: userId };
    return this.getClient().get(`/movie/watched`, { params });
  }

  static searchMovies(query) {
    return this.getClient().get(`/movie?q=${query}`);
  }

  static getMovie(id, userId) {
    return this.getClient().get(`/movie/${id}`, { params: {...baseParams, user_id: userId} });
  }

  static createMovie(movie) {
    return this.getClient().post(`/movie/`, movie);
  }

  static updateMovie(id, movie) {
    return this.getClient().put(`/movie/${id}`, movie);
  }

  static deleteMovie(id) {
    return this.getClient().delete(`/movie/${id}`);
  }

  static loadFromOMDB(title) {
    return this.getDefaultClient().get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`);
  }

  static listGenres() {
    return this.getClient().get(`/genre/`);
  }

  static listTags() {
    return this.getClient().get(`/tag/`);
  }

  static markMovieWatched(userid, movieid) {
    //TODO update path etc depending on backend
    return this.getClient().post(`/users_to_movies`, {user: userid, movie: movieid, rating: 3});
  }

  static deleteMarkMovieWatched(userid, movieid){
    return this.getClient().delete(`/users_to_movies/${userid}/${movieid}`);
  }

  static rateMovie(userid, movieid, rating){
    //TODO update path etc depending on backend
    return this.getClient().post(`/users_to_movies/`, {user: userid, movie: movieid, rating: rating});
  }
}

export default MovieApi;
