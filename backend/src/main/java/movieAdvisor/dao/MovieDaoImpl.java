package movieAdvisor.dao;

import movieAdvisor.model.Movie;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieDaoImpl implements MovieDao{
    @Autowired
    SessionFactory sessionFactory;


    Session session;
    Transaction tx = null;

    public MovieDaoImpl() {
        session = null;
    }

    public boolean addEntity(Movie movie) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(movie);
        tx.commit();
        session.close();
        return false;
    }

    public Movie getEntityById(int id) throws Exception {
        session = sessionFactory.openSession();
        Movie movie = (Movie) session.load(Movie.class, new Long(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return movie;
    }

    public List<Movie> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Movie> movieList = session.createCriteria(Movie.class).list();
        tx.commit();
        session.close();
        return movieList;
    }

    public boolean deleteEntity(long id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Movie.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public boolean updateEntity(Movie movie) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(movie);
        tx.commit();
        session.close();
        return false;
    }
}
