package movieAdvisor.manyToMany.usersToMovies;

import movieAdvisor.manyToMany.usersToMovies.UsersToMovies;
import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface UsersToMoviesDao {
    boolean addEntity(UsersToMovies utm) throws Exception;
    boolean deleteEntity(long userId, long movieId) throws Exception;
    List<User> getUsersList(long movieId) throws Exception;
    List<Movie> getMoviesList(long userId) throws Exception;
    UsersToMovies getEntityById(Long userId, Long movieId) throws Exception;
}
