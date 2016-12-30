package movieAdvisor.manyToMany.usersToMovies;

import movieAdvisor.model.Status;
import movieAdvisor.manyToMany.usersToMovies.UsersToMovies;
import movieAdvisor.manyToMany.usersToMovies.UsersToMoviesServices;
import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/users_to_movies")
public class UsersToMoviesRestController {
    @Autowired
    UsersToMoviesServices utmServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addUserToMovie(@RequestBody UsersToMovies mtg) {
        try {
            utmServices.addEntity(mtg);
            return new Status(1, "UTM added Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/movie/{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<User> getUserToMovieUserList(@PathVariable("movie_id") long m_id) {
        List<User> utmList = null;
        try {
            utmList = utmServices.getUsersList(m_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return utmList;
    }

    @RequestMapping(value = "/user/{user_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<Movie> getUserToMovieMovieList(@PathVariable("user_id") long u_id) {
        List<Movie> utmList = null;
        try {
            utmList = utmServices.getMoviesList(u_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }
        return utmList;
    }

    @RequestMapping(value = "{user_id}/{movie_id}", method = RequestMethod.PUT)
    public @ResponseBody
    Status updateRating(@PathVariable("movie_id") Long movie_id,
                        @PathVariable("user_id") Long user_id, @RequestBody UsersToMovies userTM) {
        try {
            UsersToMovies utm  = utmServices.getEntityById(user_id, movie_id);
            if (utm == null)
                return new Status(0, "No connection with such data");
            utm.setRating(userTM.getRating());
            utmServices.addEntity(utm);
            return new Status(1, "Update succeed");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{user_id}/{movie_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteUserToMovie(@PathVariable("movie_id") long movie_id,
                             @PathVariable("user_id") int user_id) {
        try {
            utmServices.deleteEntity(user_id, movie_id);
            return new Status(1, "UTM deleted");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
