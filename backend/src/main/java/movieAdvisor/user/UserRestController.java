package movieAdvisor.user;

import java.util.List;

import movieAdvisor.model.Status;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody
	ResponseEntity<?> addUser(@RequestBody User user) {
		try {
			userServices.addEntity(user);
		} catch (Exception e) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity(user, HttpStatus.OK);
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public  @ResponseBody
	ResponseEntity<?> login(@RequestParam(value="username") String login,
						 @RequestParam(value="password") String password) {
		try {
			User user = userServices.getEntityByLoginPassword(login, password);
			if (user != null)
				return new ResponseEntity(user, HttpStatus.OK);
			else
				return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);
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

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	public @ResponseBody
	ResponseEntity<?>  updateUser(@PathVariable("id") long id,
								  @RequestBody User user) {
		try {
			userServices.updateEntity(id, user);
		} catch (Exception e) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
