package movieAdvisor.controller;

import movieAdvisor.model.Comment;
import movieAdvisor.model.Status;
import movieAdvisor.services.CommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
@Controller
@RequestMapping("/comment")
public class CommentRestController {
    @Autowired
    CommentServices commentServices;


    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addFtf(@RequestBody Comment com) {
        try {
            commentServices.addEntity(com);
            return new Status(1, "Comment added Successfully !");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/user/{user_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<Comment> getUserComments(@PathVariable("user_id") long id) {
        List<Comment> comList = null;
        try {
            comList = commentServices.getListByUserId(id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }
        return comList;
    }

    @RequestMapping(value = "/movie/{movie_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<Comment> getMovieComments(@PathVariable("movie_id") long id) {
        List<Comment> commList = null;
        try {
            commList = commentServices.getListByMovieId(id);
        } catch (Exception e) {
            System.out.println("Exception caught");
            e.printStackTrace();
        }

        return commList;
    }

    @RequestMapping(value = "{com_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteFtf(@PathVariable("com_id") long id) {
        try {
            commentServices.deleteEntity(id);
            return new Status(1, "Comment deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
