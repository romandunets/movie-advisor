import Api from './Api';

class MovieApi extends Api {
  static listMovies(params) {
    return this.getClient().get(`/movies`, { params });
  }

  static listRecommendedMovies(params) {
    return this.getClient().get(`/movies`, { params }); '/recommended'
  }

  static listWatchedMovies(params) {
    return this.getClient().get(`/movies`, { params }); '/watched'
  }

  static searchMovies(query) {
    return this.getClient().get(`/movies?q=${query}`);
  }

  static getMovie(id) {
    return this.getClient().get(`/movies/${id}`);
  }

  static createMovie(movie) {
    return this.getClient().post(`/movies/create`, movie);
  }

  static updateMovie(movie) {
    return this.getClient().put(`/movies/${movie.id}`, movie);
  }

  static deleteMovie(id) {
    return this.getClient().delete(`/movies/${id}`);
  }

  static loadFromOMDB(title) {
    return this.getDefaultClient().get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`);
  }

  static listGenres() {
    return this.getClient().get(`/genres`);
  }

  static listTags() {
    return this.getClient().get(`/tags`);
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
    return this.getClient().put(`/users_to_movies/${userid}/${movieid}`, {user: userid, movie: movieid, rating: rating});
  }
}

export default MovieApi;
