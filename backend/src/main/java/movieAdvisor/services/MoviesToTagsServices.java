package movieAdvisor.services;

import movieAdvisor.model.MoviesToTags;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToTagsServices {
    public boolean addEntity(MoviesToTags mtt) throws Exception;
    public List<MoviesToTags> getMoviesByTags(int tagId) throws Exception;
    public boolean deleteEntity(long movieId, int tagId) throws Exception;
    public List<MoviesToTags> getTagsByMovies(long movieId) throws Exception;
}
