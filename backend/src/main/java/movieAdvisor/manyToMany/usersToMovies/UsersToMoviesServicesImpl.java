package movieAdvisor.manyToMany.usersToMovies;

import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class UsersToMoviesServicesImpl implements UsersToMoviesServices {

    @Autowired
    UsersToMoviesDao utmDao;

    public boolean addEntity(UsersToMovies utm) throws Exception {
        return utmDao.addEntity(utm);
    }

    public boolean deleteEntity(long userId, long movieId) throws Exception {
        return utmDao.deleteEntity(userId, movieId);
    }

    public List<User> getUsersList(long movieId) throws Exception {
        return utmDao.getUsersList(movieId);
    }

    public List<Movie> getMoviesList(long userId) throws Exception {
        return utmDao.getMoviesList(userId);
    }

    public UsersToMovies getEntityById(Long userId, Long movieId) throws Exception {
        return utmDao.getEntityById(userId, movieId);
    }
}
