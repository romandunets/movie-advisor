import Api from './Api';

class MovieApi extends Api {
  static listMovies(params) {
    return this.getClient().get(`/movies`, { params });
  }

  static listRecommendedMovies(params) {
    return this.getClient().get(`/movies`, { params }); '/recommended'
  }

  static searchMovies(query) {
    return this.getClient().get(`/movies?q=${query}`);
  }

  static getMovie(id) {
    return this.getClient().get(`/movies/${id}`);
  }

  static createMovie(movie) {
    return this.getClient().post(`/movies`, movie);
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
}

export default MovieApi;
