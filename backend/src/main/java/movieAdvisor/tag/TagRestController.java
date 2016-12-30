package movieAdvisor.tag;

import movieAdvisor.model.Status;
import movieAdvisor.tag.Tag;
import movieAdvisor.tag.TagServices;
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
@RequestMapping("/tag")
public class TagRestController {
    @Autowired
    TagServices tagServices;

    @RequestMapping(value = "/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addTag(@RequestBody Tag tag) {
        try {
            tagServices.addEntity(tag);
            return new Status(1, "Tag added");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody
    List<Tag> getTagList() {
        List<Tag> tagList = null;
        try {
            tagList = tagServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tagList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteTag(@PathVariable("id") int id) {
        try {
            tagServices.deleteEntity(id);
            return new Status(1, "Tag deleted");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateTag(@PathVariable("id") int id, @RequestBody Tag role) {
        try {
            role.setId(id);
            tagServices.updateEntity(role);
            return new Status(1, "Tag updated");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
