package movieAdvisor.services;

import movieAdvisor.model.UsersToMovies;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface UsersToMoviesServices {
    public boolean addEntity(UsersToMovies utm) throws Exception;
    public boolean deleteEntity(long user_id, long movie_id) throws Exception;
    public List<UsersToMovies> getUsersList(long movie_id) throws Exception;
    public List<UsersToMovies> getMoviesList(long user_id) throws Exception;
}
