package movieAdvisor.services;

import movieAdvisor.model.FollowerToFollowed;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface FollowerToFollowedServices {
    public boolean addEntity(FollowerToFollowed role) throws Exception;
    public FollowerToFollowed getEntityById(long followerId, long followedId) throws Exception;
    public List<FollowerToFollowed> getEntityList() throws Exception;
    public boolean deleteEntity(long followerId, long followedId) throws Exception;
    public List<FollowerToFollowed> getFollowerList(long follower_id) throws Exception;

}
