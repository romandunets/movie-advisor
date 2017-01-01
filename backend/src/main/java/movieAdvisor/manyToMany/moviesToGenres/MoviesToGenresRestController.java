package movieAdvisor.manyToMany.moviesToGenres;

import movieAdvisor.model.Status;
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
@RequestMapping("/movies_to_genres")
public class MoviesToGenresRestController {

    @Autowired
    MoviesToGenresServices mtgServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addFtf(@RequestBody MoviesToGenres mtg) {
        try {
            mtgServices.addEntity(mtg);
            return new Status(1, "MTG added Successfully !");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    // return list of records with certain follower
    @RequestMapping(value = "{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<MoviesToGenres> getFollowerList(@PathVariable("movie_id") long m_id) {
        List<MoviesToGenres> mtgList = null;
        try {
            mtgList = mtgServices.getMovieGenreList(m_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return mtgList;
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<MoviesToGenres> getFtfList() {
        List<MoviesToGenres> mtgList = null;
        try {
            mtgList = mtgServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return mtgList;
    }

    @RequestMapping(value = "{movie_id}/{genre_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteFtf(@PathVariable("movie_id") long m_id, @PathVariable("genre_id") int g_id) {
        try {
            mtgServices.deleteEntity(m_id, g_id);
            return new Status(1, "MTG deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
