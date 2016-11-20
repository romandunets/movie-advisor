package movieAdvisor.services;

import java.util.List;

import movieAdvisor.model.User;
import movieAdvisor.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

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
		System.out.println("Get Entity list!!!!");
		return userDao.getEntityList();
	}

	public boolean deleteEntity(long id) throws Exception {
		return userDao.deleteEntity(id);
	}

}
