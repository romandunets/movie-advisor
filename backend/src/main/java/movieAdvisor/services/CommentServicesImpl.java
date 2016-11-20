package movieAdvisor.services;

import movieAdvisor.dao.CommentDao;
import movieAdvisor.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class CommentServicesImpl implements CommentServices {
    @Autowired
    CommentDao comdDao;

    public boolean addEntity(Comment com) throws Exception {
        return comdDao.addEntity(com);
    }

    public Comment getEntityById(long id) throws Exception {
        return comdDao.getEntityById(id);
    }

    public boolean deleteEntity(long id) throws Exception {
        return comdDao.deleteEntity(id);
    }

    public List<Comment> getListByUserId(long user_id) throws Exception {
        return comdDao.getListByUserId(user_id);
    }

    public List<Comment> getListByMovieId(long movie_id) throws Exception {
        return comdDao.getListByMovieId(movie_id);
    }
}
