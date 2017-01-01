package movieAdvisor.manyToMany.moviesToTags;

import movieAdvisor.manyToMany.moviesToTags.MoviesToTags;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToTagsServices {
    boolean addEntity(MoviesToTags mtt) throws Exception;
    List<MoviesToTags> getMoviesByTags(int tagId) throws Exception;
    boolean deleteEntity(long movieId, int tagId) throws Exception;
    List<MoviesToTags> getTagsByMovies(long movieId) throws Exception;
}
