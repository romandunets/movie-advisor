package movieAdvisor.user;

import java.util.List;

import movieAdvisor.role.Role;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory sessionFactory;

	Session session = null;
	Transaction tx = null;

	public boolean addEntity(User user) throws Exception {

		session = sessionFactory.openSession();
		tx = session.beginTransaction();
		user.setSalt("default salt");
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		List<Role> roleList = session.createQuery("from Role role where role.name=:role_name").
				setParameter("role_name", "user").list();
		if (roleList.size() != 1)
			throw new Exception("Failed to find user role. Ask administrator");
		user.setRole(roleList.get(0));
		session.save(user);
		tx.commit();
		session.close();

		return false;
	}

	public User getEntityById(long id) throws Exception {
		session = sessionFactory.openSession();
		User user = (User) session.load(User.class,
				new Long(id));
		tx = session.getTransaction();
		session.beginTransaction();
		tx.commit();
		return user;
	}

	public List<User> getEntityList() throws Exception {
		session = sessionFactory.openSession();
		tx = session.beginTransaction();
		List<User> userList = session.createCriteria(User.class)
				.list();
		tx.commit();
		session.close();

		return userList;
	}

	public boolean deleteEntity(long id)
			throws Exception {
		session = sessionFactory.openSession();
		Object o = session.load(User.class, id);
		tx = session.getTransaction();
		session.beginTransaction();
		session.delete(o);
		tx.commit();
		return false;
	}

	public User getEntityByLoginPassword(String login, String password) {
		session = sessionFactory.openSession();
		String sqlQuery = "from User u where u.username=:username";
		Query query = session.createQuery(sqlQuery)
				.setParameter("username", login);
		tx = session.getTransaction();
		session.beginTransaction();
		tx.commit();

		List<User> users = query.list();
		if (users.size() == 0)
			return null;

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		if (passwordEncoder.matches(password, users.get(0).getPassword()))
			return users.get(0);
		else
			return null;
	}

	public User updateEntity(Long id, User user) {
		session = sessionFactory.openSession();
		tx = session.beginTransaction();

		User dbUser = (User) session.load(User.class, id);
		if (dbUser == null)
			return null;

		dbUser.setBirthday(user.getBirthday());
		if (user.getPassword() != "" && user.getPassword() != null) {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			dbUser.setPassword(passwordEncoder.encode(user.getPassword()));
		}

		dbUser.setDescription(user.getDescription());
		dbUser.setEmail(user.getEmail());
		dbUser.setFirstName(user.getFirstName());
		dbUser.setGender(user.getGender());
		dbUser.setSecondName(user.getSecondName());
		dbUser.setUsername(user.getUsername());

		session.update(dbUser);
		tx.commit();
		session.close();
		return dbUser;
	}
}
