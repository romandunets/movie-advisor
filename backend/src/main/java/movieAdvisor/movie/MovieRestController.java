package movieAdvisor.movie;


import movieAdvisor.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.util.*;

/**
 * Created by eaonmov on 11/15/16.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/movie")
public class MovieRestController {

    @Autowired
    MovieServices movieServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addMovie(@RequestBody Movie movie) {
        try {
            movieServices.addEntity(movie);
            return new Status(1, "Movie added");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/{movie_id}", method = RequestMethod.GET)
    public @ResponseBody
    Movie getMovieById(@PathVariable("movie_id") Long movieId,
                       @RequestParam(value="user_id", defaultValue = "0") Long userId) {
        try {
            Movie movie = movieServices.getEntityById(movieId, userId);
            return movie;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    MoviesListPaging getMovieList(@RequestParam(value="per_page", defaultValue = "50") Integer moviesPerPage,
                             @RequestParam(value="page", defaultValue = "1") Integer pageNumber,
                             @RequestParam(value="order_precedence", defaultValue = "desc") String orderType,
                             @RequestParam(required = false, value="order_by") List<String> sortBy,
                             @RequestParam(required = false, value="year") Integer year,
                             @RequestParam(required = false, value="genre") Integer genre,
                             @RequestParam(required = false, value="title") String title,
                             @RequestParam(required = false, value="free_search") String freeSearch,
                             @RequestParam(required = false, value="description") String description,
                             @RequestParam(required = false, value="duration") Integer duration,
                             @RequestParam(value="user_id", defaultValue = "0") Long userId) {

        MoviesListPaging movieList = null;
        MovieSearchDTO movieSearchDTO = new MovieSearchDTO(pageNumber, moviesPerPage,
                                                            duration, year, genre, sortBy,
                                                            orderType, description, title, freeSearch, userId, false);
        try {
            movieList = movieServices.getEntityList(movieSearchDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return movieList;
    }

    @RequestMapping(value = "/watched", method = RequestMethod.GET)
    public @ResponseBody
    MoviesListPaging getWatchedMovieList(@RequestParam(value="per_page", defaultValue = "50") Integer moviesPerPage,
                                  @RequestParam(value="page", defaultValue = "1") Integer pageNumber,
                                  @RequestParam(value="order_precedence", defaultValue = "desc") String orderType,
                                  @RequestParam(required = false, value="order_by") List<String> sortBy,
                                  @RequestParam(required = false, value="year") Integer year,
                                  @RequestParam(required = false, value="genre") Integer genre,
                                  @RequestParam(required = false, value="title") String title,
                                  @RequestParam(required = false, value="free_search") String freeSearch,
                                  @RequestParam(required = false, value="description") String description,
                                  @RequestParam(required = false, value="duration") Integer duration,
                                  @RequestParam(value="user_id", defaultValue = "0") Long userId) {

        MoviesListPaging movieList = null;
        MovieSearchDTO movieSearchDTO = new MovieSearchDTO(pageNumber, moviesPerPage,
                                                            duration, year, genre, sortBy,
                                                            orderType, description, title, freeSearch, userId, true);
        try {
            movieList = movieServices.getEntityList(movieSearchDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return movieList;
    }

    @RequestMapping(value = "/recommend/{user_id}", method = RequestMethod.GET)
    public @ResponseBody
    List<Movie> getRecommendedMovies(@PathVariable("user_id") Long userId) {
        List<Movie> movieList = null;
        try {
            movieList = movieServices.getRecommendedMovies(userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return movieList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteMovieRole(@PathVariable("id") long id) {

        try {
            movieServices.deleteEntity(id);
            return new Status(1, "Movie deleted");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateMovie(@PathVariable("id") int id, @RequestBody Movie movie) {
        try {
            movie.setId(id);
            movieServices.updateEntity(movie);
            return new Status(1, "Movie updated");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
