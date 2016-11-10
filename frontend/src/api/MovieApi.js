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

  static fetchRecommendedMovies(userid) {
    return this.getClient().get(`/recommendedMovies`);
  }
}


export default MovieApi;