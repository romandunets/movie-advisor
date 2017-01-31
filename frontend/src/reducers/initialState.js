export default {
  auth: {
    currentUser: JSON.parse(localStorage.getItem('user')) || {},
    isAdmin: (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).role.name == "admin"),
    isAuthenticated: localStorage.getItem('user') !== null,
    message: ''
  },
  notifications: {
    notifications: []
  },
  users: {
    users: [],
    user: {},
    isLoading: false
  },
  movies: {
    movies: [],
    movie: {
      photos: [],
      genres: [],
      tags: []
    },
    genres: [],
    tags: [],
    pages: 1,
    isLoading: false
  }
}
