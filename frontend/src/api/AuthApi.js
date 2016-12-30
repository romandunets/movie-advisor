import Api from './Api';

class AuthApi extends Api {
  static login(credentials) {
    return this.getClient().get('/user/login', { params: credentials });
  }

  static signup(credentials) {
    return this.getClient().post('/signup', credentials);
  }
}

export default AuthApi;