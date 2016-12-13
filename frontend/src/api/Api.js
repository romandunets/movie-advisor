import axios from 'axios';

class Api {
  static getDefaultClient() {
    return axios.create();
  }

  static getClient() {
    var config = {
      baseURL: process.env.API_HOST
    };

    if (localStorage.getItem('token') !== null) {
      let token = localStorage.getItem('token');
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return axios.create(config);
  }
}

export default Api;
