package movieAdvisor.manyToMany.followerToFollowed;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface FollowerToFollowedDao {
    boolean addEntity(FollowerToFollowed ftf) throws Exception;
    FollowerToFollowed getEntityById(long idFollower, long idFollowed) throws Exception;
    List<FollowerToFollowed> getEntityList() throws Exception;
    boolean deleteEntity(long idFollower, long idFollowed) throws Exception;
    List<FollowerToFollowed> getFollowerList(long id) throws Exception;
    List<FollowerToFollowed> getFollowedList(long id) throws Exception;
}
