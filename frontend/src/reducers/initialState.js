export default {
  auth: {
    currentUser: JSON.parse(localStorage.getItem('user')) || {},
    isAdmin: false,
    isAuthenticated: localStorage.getItem('user') !== null,
    message: ''
  },
  users: {
    users: [],
    user: {},
    message: '',
    error: '',
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
    message: '',
    error: '',
    isLoading: false
  }
}
