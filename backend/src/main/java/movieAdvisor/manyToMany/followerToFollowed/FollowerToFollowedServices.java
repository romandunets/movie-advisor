package movieAdvisor.manyToMany.followerToFollowed;

import movieAdvisor.manyToMany.followerToFollowed.FollowerToFollowed;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface FollowerToFollowedServices {
    boolean addEntity(FollowerToFollowed role) throws Exception;
    FollowerToFollowed getEntityById(long followerId, long followedId) throws Exception;
    List<FollowerToFollowed> getEntityList() throws Exception;
    boolean deleteEntity(long followerId, long followedId) throws Exception;
    List<FollowerToFollowed> getFollowerList(long follower_id) throws Exception;
    List<FollowerToFollowed> getFollowedList(long followed_id) throws Exception;
}
