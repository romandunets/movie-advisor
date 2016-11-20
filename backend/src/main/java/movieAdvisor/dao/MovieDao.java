package movieAdvisor.dao;

import movieAdvisor.model.Movie;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MovieDao {
    public boolean addEntity(Movie movie) throws Exception;
    public Movie getEntityById(int id) throws Exception;
    public List<Movie> getEntityList() throws Exception;
    public boolean deleteEntity(long id) throws Exception;
    public boolean updateEntity(Movie movie) throws Exception;
}
