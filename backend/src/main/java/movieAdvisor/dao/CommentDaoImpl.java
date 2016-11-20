package movieAdvisor.dao;

import movieAdvisor.model.Comment;
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

    public Comment getEntityById(long id) throws Exception {
        session = sessionFactory.openSession();
        Comment com = (Comment) session.load(Comment.class,
                new Comment(id));
        tx = session.getTransaction();
        session.beginTransaction();
        tx.commit();
        return com;
    }

    public boolean deleteEntity(long id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Comment.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<Comment> getListByUserId(long user_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Comment> results = session.createSQLQuery("SELECT * FROM comments where comments.user_id=:user_id")
                .addEntity(Comment.class)
                .setParameter("user_id", user_id).list();

        tx.commit();
        session.close();
        return results;
    }

    public List<Comment> getListByMovieId(long movie_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Comment> results = session.createSQLQuery("SELECT * FROM comments where comments.movie_id=:movie_id")
                .addEntity(Comment.class)
                .setParameter("movie_id", movie_id).list();

        tx.commit();
        session.close();
        return results;
    }
}
