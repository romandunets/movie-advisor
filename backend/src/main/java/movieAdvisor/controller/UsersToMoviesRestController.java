package movieAdvisor.controller;

import movieAdvisor.model.Status;
import movieAdvisor.model.UsersToMovies;
import movieAdvisor.services.UsersToMoviesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
@Controller
@RequestMapping("/users_to_movies")
public class UsersToMoviesRestController {
    @Autowired
    UsersToMoviesServices utmServices;


    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addFtf(@RequestBody UsersToMovies mtg) {
        try {
            utmServices.addEntity(mtg);
            return new Status(1, "UTM added Successfully !");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    // return list of records with certain follower
    @RequestMapping(value = "/movie/{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<UsersToMovies> getUsersList(@PathVariable("movie_id") long m_id) {
        List<UsersToMovies> utmList = null;
        try {
            utmList = utmServices.getUsersList(m_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return utmList;
    }

    // return list of records with certain follower
    @RequestMapping(value = "/user/{user_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<UsersToMovies> getFollowerList(@PathVariable("user_id") long u_id) {
        List<UsersToMovies> utmList = null;
        try {
            utmList = utmServices.getMoviesList(u_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }
        return utmList;
    }

    @RequestMapping(value = "{user_id}/{movie_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteFtf(@PathVariable("movie_id") long m_id, @PathVariable("user_id") int u_id) {
        try {
            utmServices.deleteEntity(u_id, m_id);
            return new Status(1, "UTM deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
