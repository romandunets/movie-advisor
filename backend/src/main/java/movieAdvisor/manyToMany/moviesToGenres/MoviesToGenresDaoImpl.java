package movieAdvisor.manyToMany.moviesToGenres;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MoviesToGenresDaoImpl implements MoviesToGenresDao {

    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(MoviesToGenres moviesToGenres) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(moviesToGenres);
        tx.commit();
        session.close();
        return false;
    }

    public MoviesToGenres getEntityById(long movie_id, int genre_id) throws Exception {
        session = sessionFactory.openSession();
        MoviesToGenres mtg = (MoviesToGenres) session.load(MoviesToGenres.class, new MoviesToGenres(movie_id, genre_id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return mtg;
    }

    public List<MoviesToGenres> getEntityList() throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<MoviesToGenres> ftfList = session.createCriteria(MoviesToGenres.class).list();
        tx.commit();
        session.close();
        return ftfList;
    }

    public boolean deleteEntity(long movie_id, int genre_id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(MoviesToGenres.class, new MoviesToGenres(movie_id, genre_id));
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<MoviesToGenres> getGenresList(long movie_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<MoviesToGenres> results = session.createSQLQuery("SELECT * FROM movies_to_genres where movies_to_genres.movie_id=:m_id")
                .addEntity(MoviesToGenres.class)
                .setParameter("m_id", movie_id).list();

        tx.commit();
        session.close();
        return results;
    }
}
