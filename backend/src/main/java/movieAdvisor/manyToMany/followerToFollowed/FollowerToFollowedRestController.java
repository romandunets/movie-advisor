package movieAdvisor.manyToMany.followerToFollowed;

import movieAdvisor.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/follower_to_followed")
public class FollowerToFollowedRestController {

    @Autowired
    FollowerToFollowedServices ftfServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addFtf(@RequestBody FollowerToFollowed ftf) {
        try {
            ftfServices.addEntity(ftf);
            return new Status(1, "FTF added Successfully !");
        } catch (Exception e) {
            e.printStackTrace();
            return new Status(0, e.toString());
        }
    }

    // return list of records with certain follower
    @RequestMapping(value = "follower/{follower_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<FollowerToFollowed> getFollowerList(@PathVariable("follower_id") long id) {
        List<FollowerToFollowed> ftfList = null;
        try {
            ftfList = ftfServices.getFollowerList(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ftfList;
    }

    // return list of records with certain follower
    @RequestMapping(value = "followed/{followed_id}", method = RequestMethod.GET)
    public  @ResponseBody
    List<FollowerToFollowed> getFollowedList(@PathVariable("followed_id") long id) {
        List<FollowerToFollowed> ftfList = null;
        try {
            ftfList = ftfServices.getFollowedList(id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ftfList;
    }



    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<FollowerToFollowed> getFtfList() {
        List<FollowerToFollowed> ftfList = null;
        try {
            ftfList = ftfServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ftfList;
    }

    @RequestMapping(value = "{follower_id}/{followed_id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteFtf(@PathVariable("follower_id") long fr_id, @PathVariable("followed_id") long fd_id) {
        try {
            ftfServices.deleteEntity(fr_id, fd_id);
            return new Status(1, "User deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }

    }
}
