package movieAdvisor.user;

import java.util.List;

public interface UserDao {
	boolean addEntity(User user) throws Exception;
	User getEntityById(long id) throws Exception;
	List<User> getEntityList() throws Exception;
	boolean deleteEntity(long id) throws Exception;
	User getEntityByLoginPassword(String login, String password);
}
