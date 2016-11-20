package movieAdvisor.services;

import movieAdvisor.model.Movie;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MovieServices {
    public boolean addEntity(Movie movie) throws Exception;
    public Movie getEntityById(long id) throws Exception;
    public List<Movie> getEntityList() throws Exception;
    public boolean deleteEntity(int id) throws Exception;
    public boolean updateEntity(Movie movie) throws Exception;
}
