package movieAdvisor.manyToMany.moviesToGenres;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToGenresDao {
    public boolean addEntity(MoviesToGenres moviesToGenrestg) throws Exception;
    public MoviesToGenres getEntityById(long movie_id, int genre_id) throws Exception;
    public List<MoviesToGenres> getEntityList() throws Exception;
    public boolean deleteEntity(long movie_id, int genre_id) throws Exception;
    public List<MoviesToGenres> getGenresList(long movie_id) throws Exception;
}
