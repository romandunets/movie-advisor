package movieAdvisor.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class UserServicesImpl implements UserServices {

	@Autowired
    UserDao userDao;
	
	public boolean addEntity(User user) throws Exception {
		return userDao.addEntity(user);
	}

	public User getEntityById(long id) throws Exception {
		return userDao.getEntityById(id);
	}

	public List<User> getEntityList() throws Exception {
		return userDao.getEntityList();
	}

	public boolean deleteEntity(long id) throws Exception {
		return userDao.deleteEntity(id);
	}

	public User getEntityByLoginPassword(String login, String password) throws Exception {
		return userDao.getEntityByLoginPassword(login, password);
	}

}
