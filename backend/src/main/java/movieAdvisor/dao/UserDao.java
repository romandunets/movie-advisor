package movieAdvisor.dao;

import java.util.List;

import movieAdvisor.model.User;

public interface UserDao {

	public boolean addEntity(User user) throws Exception;
	public User getEntityById(long id) throws Exception;
	public List<User> getEntityList() throws Exception;
	public boolean deleteEntity(long id) throws Exception;
}
