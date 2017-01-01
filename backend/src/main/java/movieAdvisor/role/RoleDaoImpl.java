package movieAdvisor.role;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public class RoleDaoImpl implements RoleDao {

    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(Role role) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(role);
        tx.commit();
        session.close();
        return false;
    }

    public Role getEntityById(int id) throws Exception {
        session = sessionFactory.openSession();
        Role role = (Role) session.load(Role.class, new Integer(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return role;
    }

    public List<Role> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Role> roleList = session.createCriteria(Role.class).list();
        tx.commit();
        session.close();
        return roleList;
    }

    public boolean deleteEntity(int id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Role.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public boolean updateEntity(Role role) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(role);
        tx.commit();
        session.close();
        return false;
    }
}
