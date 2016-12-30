package movieAdvisor.movie;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface MovieDao {
    boolean addEntity(Movie movie) throws Exception;
    Movie getEntityById(Long id) throws Exception;
    MoviesListPaging getEntityList(MovieSearchDTO movieSearchDTO) throws Exception;
    List<Movie> getRecommendedMovies(Long id) throws Exception;
    boolean deleteEntity(Long id) throws Exception;
    boolean updateEntity(Movie movie) throws Exception;
}
