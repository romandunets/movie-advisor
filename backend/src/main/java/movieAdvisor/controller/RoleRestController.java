package movieAdvisor.controller;

import movieAdvisor.model.Status;
import movieAdvisor.services.RoleServices;
import movieAdvisor.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Created by eaonmov on 11/13/16.
 */
@Controller
@RequestMapping("/role")
public class RoleRestController {
    @Autowired
    RoleServices roleServices;

    @RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status addRole(@RequestBody Role role) {
        try {
            roleServices.addEntity(role);
            return new Status(1, "Role added successfully");
        } catch (Exception e) {
            // e.printStackTrace();
            return new Status(0, e.toString());
        }

    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public @ResponseBody
    List<Role> getRoleList() {
        List<Role> roleList = null;
        try {
            roleList = roleServices.getEntityList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return roleList;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public @ResponseBody
    Status deleteRole(@PathVariable("id") int id) {

        try {
            roleServices.deleteEntity(id);
            return new Status(1, "Role deleted Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Status updateRole(@PathVariable("id") int id, @RequestBody Role role) {
        try {
            role.setId(id);
            roleServices.updateEntity(role);
            return new Status(1, "Role updated Successfully !");
        } catch (Exception e) {
            return new Status(0, e.toString());
        }
    }
}