package movieAdvisor.movie;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MovieServices {
    boolean addEntity(Movie movie) throws Exception;
    Movie getEntityById(Long movieId, Long userId) throws Exception;
    MoviesListPaging getEntityList(MovieSearchDTO movieSearchDTO) throws Exception;
    List<Movie> getRecommendedMovies(Long userId) throws  Exception;
    boolean deleteEntity(long id) throws Exception;
    Movie updateEntity(Movie movie) throws Exception;
}
