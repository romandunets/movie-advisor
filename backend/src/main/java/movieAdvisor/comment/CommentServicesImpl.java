package movieAdvisor.comment;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class CommentServicesImpl implements CommentServices {
    @Autowired
    CommentDao commentDao;

    public boolean addEntity(Comment com) throws Exception {
        return commentDao.addEntity(com);
    }

    public Comment getEntityById(Long id) throws Exception {
        return commentDao.getEntityById(id);
    }

    public boolean deleteEntity(Long id) throws Exception {
        return commentDao.deleteEntity(id);
    }

    public List<Comment> getListByUserId(Long userId) throws Exception {
        return commentDao.getListByUserId(userId);
    }

    public List<Comment> getListByMovieId(Long movieId) throws Exception {
        return commentDao.getListByMovieId(movieId);
    }
}
