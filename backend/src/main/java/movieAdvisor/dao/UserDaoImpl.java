package movieAdvisor.dao;

import java.util.List;

import movieAdvisor.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory sessionFactory;

	Session session = null;
	Transaction tx = null;

	public boolean addEntity(User user) throws Exception {

		session = sessionFactory.openSession();
		tx = session.beginTransaction();
		user.setSalt("default salt");
		System.out.println();
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

}
