package movieAdvisor.user;

import java.util.List;

import movieAdvisor.model.Status;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/user")
public class UserRestController {

	@Autowired
    UserServices userServices;

	static final Logger logger = Logger.getLogger(UserRestController.class);

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
    Status addUser(@RequestBody User user) {
		try {
			userServices.addEntity(user);
			return new Status(1, "User added");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public  @ResponseBody
	User login(@RequestParam(value="username") String login,
			   @RequestParam(value="password") String password) {
		try {
			return userServices.getEntityByLoginPassword(login, password);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody
	User getUser(@PathVariable("id") long id) {
		User user = null;
		try {
			user = userServices.getEntityById(id);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

	@Transactional
	@RequestMapping(value = "/list", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	List<User> getUserList() {

		List<User> userList = null;
		try {
			userList = userServices.getEntityList();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return userList;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public @ResponseBody
	Status deleteUser(@PathVariable("id") long id) {

		try {
			userServices.deleteEntity(id);
			return new Status(1, "User deleted Successfully !");
		} catch (Exception e) {
			return new Status(0, e.toString());
		}

	}
}
