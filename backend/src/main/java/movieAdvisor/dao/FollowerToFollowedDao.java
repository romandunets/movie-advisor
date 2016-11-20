package movieAdvisor.dao;

import movieAdvisor.model.FollowerToFollowed;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface FollowerToFollowedDao {
    public boolean addEntity(FollowerToFollowed ftf) throws Exception;
    public FollowerToFollowed getEntityById(long idFollower, long idFollowed) throws Exception;
    public List<FollowerToFollowed> getEntityList() throws Exception;
    public boolean deleteEntity(long idFollower, long idFollowed) throws Exception;
    public List<FollowerToFollowed> getFollowerList(long fr_id) throws Exception;
}
