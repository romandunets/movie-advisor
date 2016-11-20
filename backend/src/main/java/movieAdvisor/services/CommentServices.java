package movieAdvisor.services;

import movieAdvisor.model.Comment;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface CommentServices {
    public boolean addEntity(Comment ftf) throws Exception;
    public Comment getEntityById(long id) throws Exception;
    public boolean deleteEntity(long id) throws Exception;
    public List<Comment> getListByUserId(long user_id) throws Exception;
    public List<Comment> getListByMovieId(long movie_id) throws Exception;
}
