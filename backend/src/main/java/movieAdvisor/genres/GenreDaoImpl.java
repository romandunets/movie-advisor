package movieAdvisor.genres;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
public class GenreDaoImpl implements GenreDao{
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(Genre genre) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(genre);
        tx.commit();
        session.close();
        return false;
    }

    public Genre getEntityById(int id) throws Exception {
        session = sessionFactory.openSession();
        Genre genre = (Genre) session.load(Genre.class, new Long(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return genre;
    }

    public List<Genre> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Genre> genreList = session.createCriteria(Genre.class).list();
        tx.commit();
        session.close();
        return genreList;
    }

    public boolean deleteEntity(int id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Genre.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public boolean updateEntity(Genre genre) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(genre);
        tx.commit();
        session.close();
        return false;
    }
}
