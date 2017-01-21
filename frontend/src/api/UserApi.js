import Api from './Api';

class UserApi extends Api {
  static listUsers() {
    return this.getClient().get(`/user/list`);
  }

  static getUser(id) {
    return this.getClient().get(`/user/${id}`);
  }

  static createUser(user) {
    return this.getClient().post(`/user/create`, user);
  }

  static updateUser(user) {
    return this.getClient().put(`/user/${user.id}`, user);
  }

  static deleteUser(id) {
    return this.getClient().delete(`/usesdr/${id}`);
  }
}

export default UserApi;
