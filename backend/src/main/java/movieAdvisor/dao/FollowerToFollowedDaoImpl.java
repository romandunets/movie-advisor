package movieAdvisor.dao;

import movieAdvisor.model.FollowerToFollowed;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public class FollowerToFollowedDaoImpl implements FollowerToFollowedDao {
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(FollowerToFollowed ftf) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(ftf);
        tx.commit();
        session.close();
        return false;
    }

    public FollowerToFollowed getEntityById(long idFollower, long idFollowed) throws Exception {
        session = sessionFactory.openSession();
        FollowerToFollowed ftf = (FollowerToFollowed) session.load(FollowerToFollowed.class,
                new FollowerToFollowed(idFollower, idFollowed));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        System.out.println("FTF: " + ftf.getFollowed().getId() + "   " + ftf.getFollower().getId());
        return ftf;
    }

    public List<FollowerToFollowed> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<FollowerToFollowed> ftfList = session.createCriteria(FollowerToFollowed.class).list();
        tx.commit();
        session.close();
        return ftfList;
    }

    public boolean deleteEntity(long idFollower, long idFollowed) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(FollowerToFollowed.class, new FollowerToFollowed(idFollower, idFollowed));
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<FollowerToFollowed> getFollowerList(long fr_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<FollowerToFollowed> results = session.createSQLQuery("SELECT * FROM follower_to_followed where follower_to_followed.follower_id=:fr_id")
                .addEntity(FollowerToFollowed.class)
                .setParameter("fr_id", fr_id).list();

        tx.commit();
        session.close();
        return results;
    }
}
