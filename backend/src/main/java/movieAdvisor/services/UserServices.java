package movieAdvisor.services;

import java.util.List;

import movieAdvisor.model.User;

public interface UserServices {
	public boolean addEntity(User user) throws Exception;
	public User getEntityById(long id) throws Exception;
	public List<User> getEntityList() throws Exception;
	public boolean deleteEntity(long id) throws Exception;
}
