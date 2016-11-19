package movieAdvisor.dao;

import movieAdvisor.model.MovieImages;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MovieImagesDao {
    public boolean addEntity(MovieImages image) throws Exception;
    public MovieImages getEntityById(long id) throws Exception;
    public List<MovieImages> getEntityListByMovieId(long movie_id) throws Exception;
    public boolean deleteEntity(long id) throws Exception;
    public boolean updateEntity(MovieImages image) throws Exception;
}
