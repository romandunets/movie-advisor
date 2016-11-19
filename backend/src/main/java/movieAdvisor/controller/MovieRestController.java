package movieAdvisor.controller;

import movieAdvisor.model.Movie;
import movieAdvisor.model.Status;
import movieAdvisor.services.MovieServices;
import movieAdvisor.services.MovieServicesImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */

@Controller
@RequestMapping("/movie")
public class MovieRestController {

    @Autowired
    MovieServicesImpl movieServices;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addRole(@RequestBody Movie movie) {
        try {
            movieServices.addEntity(movie);
            return new Status(1, "Movie added successfully");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<Movie> getRoleList() {
        List<Movie> movieList = null;
        try {
            movieList = movieServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return movieList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteRole(@PathVariable("id") long id) {

        try {
            movieServices.deleteEntity(id);
            return new Status(1, "Movie deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateRole(@PathVariable("id") int id, @RequestBody Movie movie) {
        try {
            movie.setId(id);
            movieServices.updateEntity(movie);
            return new Status(1, "Movie updated Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
