package movieAdvisor.dao;

import movieAdvisor.model.Tag;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class TagDaoImpl implements TagDao {

    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(Tag tag) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(tag);
        tx.commit();
        session.close();
        return false;
    }

    public Tag getEntityById(int id) throws Exception {
        session = sessionFactory.openSession();
        Tag tag = (Tag) session.load(Tag.class, new Long(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return tag;
    }

    public List<Tag> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Tag> tagList = session.createCriteria(Tag.class).list();
        tx.commit();
        session.close();
        return tagList;
    }

    public boolean deleteEntity(int id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Tag.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public boolean updateEntity(Tag tag) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(tag);
        tx.commit();
        session.close();
        return false;
    }
}
