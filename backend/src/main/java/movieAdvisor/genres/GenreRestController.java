package movieAdvisor.genres;

import movieAdvisor.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/genre")
public class GenreRestController {

    @Autowired
    GenreServices genreServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addGenre(@RequestBody Genre genre) {
        try {
            genreServices.addEntity(genre);
            return new Status(1, "Genre added");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody
    List<Genre> getGenreList() {
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
    Status deleteGenre(@PathVariable("id") int id) {

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
