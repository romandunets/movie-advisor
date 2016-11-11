import axios from 'axios';

class MovieApi {
  static getClient() {
    return axios.create({
      baseURL: process.env.API_HOST
    });
  }

  static fetchMovies() {
    return this.getClient().get(`/movies`);
  }

  static fetchMovie(id){
    return this.getClient().get(`/movies/`+id);
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
}


export default MovieApi;