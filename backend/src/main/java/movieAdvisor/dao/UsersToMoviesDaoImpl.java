package movieAdvisor.dao;

import movieAdvisor.model.UsersToMovies;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class UsersToMoviesDaoImpl implements UsersToMoviesDao {
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(UsersToMovies utm) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        System.out.println();
        session.save(utm);
        tx.commit();
        session.close();
        return false;
    }

    public boolean deleteEntity(long user_id, long movie_id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(UsersToMovies.class, new UsersToMovies(user_id, movie_id));
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<UsersToMovies> getUsersList(long movie_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<UsersToMovies> results = session.createSQLQuery("SELECT * FROM users_to_movies where users_to_movies.movie_id=:m_id")
                .addEntity(UsersToMovies.class)
                .setParameter("m_id", movie_id).list();

        tx.commit();
        session.close();
        return results;
    }

    public List<UsersToMovies> getMoviesList(long user_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<UsersToMovies> results = session.createSQLQuery("SELECT * FROM users_to_movies where users_to_movies.user_id=:u_id")
                .addEntity(UsersToMovies.class)
                .setParameter("u_id", user_id).list();
        tx.commit();
        session.close();
        return results;
    }
}
