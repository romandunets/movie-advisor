package movieAdvisor.manyToMany.movieImages;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieImagesDaoImpl implements MovieImagesDao {
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(MovieImages image) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(image);
        tx.commit();
        session.close();
        return false;
    }

    public MovieImages getEntityById(long id) throws Exception {
        session = sessionFactory.openSession();
        MovieImages image = (MovieImages) session.load(MovieImages.class, new MovieImages(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return image;
    }

    public List<MovieImages> getEntityListByMovieId(long id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<MovieImages> results = session.createSQLQuery("SELECT * FROM movie_images where movie_images.movie_id=:m_id")
                .addEntity(MovieImages.class)
                .setParameter("m_id", id).list();
        tx.commit();
        session.close();
        return results;
    }

    public boolean deleteEntity(long id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(MovieImages.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public boolean updateEntity(MovieImages image) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(image);
        tx.commit();
        session.close();
        return false;
    }
}
