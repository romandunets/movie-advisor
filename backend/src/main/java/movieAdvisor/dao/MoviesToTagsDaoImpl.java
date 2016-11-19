package movieAdvisor.dao;

import movieAdvisor.model.MoviesToTags;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MoviesToTagsDaoImpl implements MoviesToTagsDao {
    @Autowired
    SessionFactory sessionFactory;

    Session session = null;
    Transaction tx = null;


    public boolean addEntity(MoviesToTags utm) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        System.out.println();
        session.save(utm);
        tx.commit();
        session.close();
        return false;
    }

    public boolean deleteEntity(int tag_id, long movie_id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(MoviesToTags.class, new MoviesToTags(movie_id, tag_id));
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public List<MoviesToTags> getMoviessList(int tag_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<MoviesToTags> results = session.createSQLQuery("SELECT * FROM movies_to_tags where movies_to_tags.tag_id=:t_id")
                .addEntity(MoviesToTags.class)
                .setParameter("t_id", tag_id).list();

        tx.commit();
        session.close();
        return results;
    }

    public List<MoviesToTags> getTagList(long movie_id) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<MoviesToTags> results = session.createSQLQuery("SELECT * FROM movies_to_tags where movies_to_tags.movie_id=:m_id")
                .addEntity(MoviesToTags.class)
                .setParameter("m_id", movie_id).list();

        tx.commit();
        session.close();
        return results;
    }
}
