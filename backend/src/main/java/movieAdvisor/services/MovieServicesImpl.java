package movieAdvisor.services;

import movieAdvisor.dao.MovieDao;
import movieAdvisor.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieServicesImpl implements MovieDao{

    @Autowired
    MovieDao movieDao;


    public boolean addEntity(Movie movie) throws Exception {
        return movieDao.addEntity(movie);
    }

    public Movie getEntityById(int id) throws Exception {
        return movieDao.getEntityById(id);
    }

    public List<Movie> getEntityList() throws Exception {
        return movieDao.getEntityList();
    }

    public boolean deleteEntity(long id) throws Exception {
        return movieDao.deleteEntity(id);
    }

    public boolean updateEntity(Movie movie) throws Exception {
        return movieDao.updateEntity(movie);
    }
}
