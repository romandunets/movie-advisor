package movieAdvisor.controller;

import movieAdvisor.model.MoviesToTags;
import movieAdvisor.model.Status;
import movieAdvisor.services.MoviesToTagsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
@Controller
@RequestMapping("/movies_to_tags")
public class MoviesToTagsRestController {

    @Autowired
    MoviesToTagsServices mttServices;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addFtf(@RequestBody MoviesToTags mtt) {
        try {
            mttServices.addEntity(mtt);
            return new Status(1, "MTT added Successfully !");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    // return list of records with certain follower
    @RequestMapping(value = "/tags/{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<MoviesToTags> getFollowerList(@PathVariable("movie_id") long m_id) {
        List<MoviesToTags> mtgList = null;
        try {
            mtgList = mttServices.getTagsByMovies(m_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return mtgList;
    }

    @RequestMapping(value = "/movies/{tag_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<MoviesToTags> getFollowerList(@PathVariable("tag_id") int t_id) {
        List<MoviesToTags> mtgList = null;
        try {
            mtgList = mttServices.getMoviesByTags(t_id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return mtgList;
    }


    @RequestMapping(value = "{movie_id}/{tag_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteFtf(@PathVariable("movie_id") long m_id, @PathVariable("tag_id") int t_id) {
        try {
            mttServices.deleteEntity(m_id, t_id);
            return new Status(1, "MTT deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
