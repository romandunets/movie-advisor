package movieAdvisor.manyToMany.usersToMovies;

import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
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
        session.saveOrUpdate(utm);
        tx.commit();
        session.close();
        return false;
    }

    public boolean deleteEntity(long user_id, long movie_id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(UsersToMovies.class, new UsersToMovies(user_id, movie_id, 0.f));
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<User> getUsersList(long movie_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<UsersToMovies> utmList = session.createSQLQuery(
                "SELECT * FROM users_to_movies where " +
                "users_to_movies.movie_id=:m_id")
                .addEntity(UsersToMovies.class)
                .setParameter("m_id", movie_id).list();

        List<User> users = new ArrayList<User>();
        for (UsersToMovies utmElement : utmList) {
            users.add(utmElement.getUser());
        }
        tx.commit();
        session.close();
        return users;
    }

    public List<Movie> getMoviesList(long user_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<UsersToMovies> utmList = session.createSQLQuery(
                "SELECT * FROM users_to_movies where " +
                "users_to_movies.user_id=:u_id")
                .addEntity(UsersToMovies.class)
                .setParameter("u_id", user_id).list();

        List<Movie> movies = new ArrayList<Movie>();
        for (UsersToMovies utmElement : utmList) {
            movies.add(utmElement.getMovie());
        }

        for (Movie movie : movies) {
            assignTagsToMovie(movie);
            assignGenresToMovie(movie);
            setOverallMovieRate(movie);
        }

        tx.commit();
        session.close();
        return movies;
    }

    public UsersToMovies getEntityById(Long userId, Long movieId) throws Exception {
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            List<UsersToMovies> utmList = session.createSQLQuery(
                    "select * from users_to_movies " +
                    "where users_to_movies.user_id=:u_id" +
                    " and users_to_movies.movie_id=:m_id")
                    .addEntity(UsersToMovies.class).
                            setParameter("u_id", userId).
                            setParameter("m_id", movieId).list();

            UsersToMovies utm = utmList.get(0);
            tx.commit();
            session.close();
            return utm;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    private void setOverallMovieRate(Movie movie) {
        String sqlQuery = "select avg (p.rating) from UsersToMovies p where p.pk.movie=:id";
        Long movieId = movie.getId();
        Query query = session.createQuery(sqlQuery).setParameter("id", new Movie(movieId));
        Double overallRate = (Double) query.list().get(0);
        if (overallRate != null) {
            movie.setRate(Float.parseFloat(String.valueOf(overallRate)));
        } else {
            movie.setRate(new Float(0));
        }
    }

    private void assignGenresToMovie(Movie movie) {
        Query query = session.createQuery("from MoviesToGenres p where p.pk.movie=:id");
        query.setParameter("id", movie);
        movie.setMovieGenres(query.list());
    }

    private void assignTagsToMovie(Movie movie) {
        Query query = session.createQuery("from MoviesToTags p where p.pk.movie=:id");
        query.setParameter("id", movie);
        movie.setMoviesTags(query.list());
    }
}
