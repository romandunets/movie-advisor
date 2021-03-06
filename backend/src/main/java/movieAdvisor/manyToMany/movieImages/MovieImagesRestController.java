package movieAdvisor.manyToMany.movieImages;

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
@RequestMapping("/movie_images")
public class MovieImagesRestController {

    @Autowired
    MovieImagesServices imageServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addImage(@RequestBody MovieImages image) {
        try {
            imageServices.addEntity(image);
            return new Status(1, "Image added");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    // return list of records with certain movie_id
    @RequestMapping(value = "/{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<MovieImages> getImageList(@PathVariable("movie_id") long m_id) {
        List<MovieImages> imageList = null;
        try {
            imageList = imageServices.getEntityListByMovieId(m_id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return imageList;
    }


    @RequestMapping(value = "/{record_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteImage(@PathVariable("record_id") long record_id) {
        try {
            imageServices.deleteEntity(record_id);
            return new Status(1, "Image deleted");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
