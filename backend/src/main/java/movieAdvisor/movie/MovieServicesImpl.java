package movieAdvisor.movie;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieServicesImpl implements MovieServices{

    @Autowired
    MovieDao movieDao;

    public boolean addEntity(Movie movie) throws Exception {
        return movieDao.addEntity(movie);
    }

    public Movie getEntityById(long id) throws Exception {
        return movieDao.getEntityById(id);
    }

    public MoviesListPaging getEntityList(MovieSearchDTO movieSearchDTO) throws Exception {
        return movieDao.getEntityList(movieSearchDTO);
    }

    public List<Movie> getRecommendedMovies(Long userId) throws Exception {
        return movieDao.getRecommendedMovies(userId);
    }

    public boolean deleteEntity(long id) throws Exception {
        return movieDao.deleteEntity(id);
    }

    public boolean updateEntity(Movie movie) throws Exception {
        return movieDao.updateEntity(movie);
    }
}
