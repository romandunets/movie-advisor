package movieAdvisor.services;

import movieAdvisor.model.MoviesToGenres;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MoviesToGenresServices {
    public boolean addEntity(MoviesToGenres mtg) throws Exception;
    public MoviesToGenres getEntityById(long followerId, int followedId) throws Exception;
    public List<MoviesToGenres> getEntityList() throws Exception;
    public boolean deleteEntity(long movieId, int genreId) throws Exception;
    public List<MoviesToGenres> getMovieGenreList(long movieId) throws Exception;
}
