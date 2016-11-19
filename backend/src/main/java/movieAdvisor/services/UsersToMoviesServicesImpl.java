package movieAdvisor.services;

import movieAdvisor.dao.UsersToMoviesDao;
import movieAdvisor.model.UsersToMovies;
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

    public boolean deleteEntity(long user_id, long movie_id) throws Exception {
        return utmDao.deleteEntity(user_id, movie_id);
    }

    public List<UsersToMovies> getUsersList(long movie_id) throws Exception {
        return utmDao.getUsersList(movie_id);
    }

    public List<UsersToMovies> getMoviesList(long user_id) throws Exception {
        return utmDao.getMoviesList(user_id);
    }
}
