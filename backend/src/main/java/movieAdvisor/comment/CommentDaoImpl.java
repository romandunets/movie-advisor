package movieAdvisor.comment;

import movieAdvisor.movie.Movie;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class CommentDaoImpl implements CommentDao {
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;

    public boolean addEntity(Comment com) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(com);
        tx.commit();
        session.close();
        return false;
    }

    public Comment getEntityById(Long id) throws Exception {
        session = sessionFactory.openSession();
        Comment com = (Comment) session.load(Comment.class,
                new Comment(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return com;
    }

    public boolean deleteEntity(Long id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Comment.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<Comment> getListByUserId(Long userId) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Comment> results = session.createSQLQuery("SELECT * FROM comments where comments.user_id=:user_id")
                .addEntity(Comment.class)
                .setParameter("user_id", userId).list();

        for (Comment comment : results) {
            assignGenresToMovie(comment.getMovie());
        }
        tx.commit();
        session.close();
        return results;
    }

    private void assignGenresToMovie(Movie movie) {
        Query query = session.createQuery("from MoviesToGenres p where p.pk.movie=:id");
        query.setParameter("id", movie);
        movie.setMovieGenres(query.list());
    }

    public List<Comment> getListByMovieId(Long movieId) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Comment> results = session.createSQLQuery(
                "SELECT * FROM comments where " +
                "comments.movie_id=:movie_id")
                .addEntity(Comment.class)
                .setParameter("movie_id", movieId).list();
        tx.commit();
        session.close();
        return results;
    }
}
