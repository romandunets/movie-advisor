package movieAdvisor.comment;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface CommentDao {
    boolean addEntity(Comment ftf) throws Exception;
    Comment getEntityById(Long id) throws Exception;
    boolean deleteEntity(Long id) throws Exception;
    List<Comment> getListByUserId(Long user_id) throws Exception;
    List<Comment> getListByMovieId(Long movie_id) throws Exception;
}
