package movieAdvisor.controller;

import movieAdvisor.model.Genre;
import movieAdvisor.model.Status;
import movieAdvisor.services.GenreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
@Controller
@RequestMapping("/genre")
public class GenreRestController {

    @Autowired
    GenreServices genreServices;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addRole(@RequestBody Genre genre) {
        try {
            genreServices.addEntity(genre);
            return new Status(1, "Genre added successfully");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<Genre> getRoleList() {
        List<Genre> genreList = null;
        try {
            genreList = genreServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return genreList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteRole(@PathVariable("id") int id) {

        try {
            genreServices.deleteEntity(id);
            return new Status(1, "Genre deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateRole(@PathVariable("id") int id, @RequestBody Genre genre) {
        try {
            genre.setId(id);
            genreServices.updateEntity(genre);
            return new Status(1, "Genre updated Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
