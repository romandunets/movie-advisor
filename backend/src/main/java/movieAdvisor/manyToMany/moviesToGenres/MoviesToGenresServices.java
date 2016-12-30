package movieAdvisor.manyToMany.moviesToGenres;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToGenresServices {
    boolean addEntity(MoviesToGenres mtg) throws Exception;
    MoviesToGenres getEntityById(long followerId, int followedId) throws Exception;
    List<MoviesToGenres> getEntityList() throws Exception;
    boolean deleteEntity(long movieId, int genreId) throws Exception;
    List<MoviesToGenres> getMovieGenreList(long movieId) throws Exception;
}
