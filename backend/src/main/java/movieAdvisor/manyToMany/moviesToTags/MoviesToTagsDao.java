package movieAdvisor.manyToMany.moviesToTags;

import movieAdvisor.manyToMany.moviesToTags.MoviesToTags;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToTagsDao {
    public boolean addEntity(MoviesToTags utm) throws Exception;
    public boolean deleteEntity(int tag_id, long movie_id) throws Exception;
    public List<MoviesToTags> getMoviessList(int tag_id) throws Exception;
    public List<MoviesToTags> getTagList(long movie_id) throws Exception;
}
