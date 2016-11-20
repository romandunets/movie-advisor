package movieAdvisor.controller;

import movieAdvisor.model.Status;
import movieAdvisor.model.Tag;
import movieAdvisor.services.TagServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
@Controller
@RequestMapping("/tag")
public class TagRestController {
    @Autowired
    TagServices tagServices;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addRole(@RequestBody Tag tag) {
        try {
            tagServices.addEntity(tag);
            return new Status(1, "Tag added successfully");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }

    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<Tag> getRoleList() {
        List<Tag> roleList = null;
        try {
            roleList = tagServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return roleList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteRole(@PathVariable("id") int id) {

        try {
            tagServices.deleteEntity(id);
            return new Status(1, "Tag deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateRole(@PathVariable("id") int id, @RequestBody Tag role) {
        try {
            role.setId(id);
            tagServices.updateEntity(role);
            return new Status(1, "Tag updated Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}
