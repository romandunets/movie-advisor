package movieAdvisor.manyToMany.followerToFollowed;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public class FollowerToFollowedServicesImpl implements FollowerToFollowedServices {


    @Autowired
    FollowerToFollowedDao ftfDao;


    public boolean addEntity(FollowerToFollowed ftf) throws Exception {
        return ftfDao.addEntity(ftf);
    }

    public FollowerToFollowed getEntityById(long followerId, long followedId) throws Exception {
        return ftfDao.getEntityById(followerId, followedId);
    }

    public List<FollowerToFollowed> getEntityList() throws Exception {
        return ftfDao.getEntityList();
    }

    public boolean deleteEntity(long followerId, long followedId) throws Exception {
        return ftfDao.deleteEntity(followerId, followedId);
    }

    public List<FollowerToFollowed> getFollowerList(long follower_id) throws Exception {
        return ftfDao.getFollowerList(follower_id);
    }

    public List<FollowerToFollowed> getFollowedList(long followed_id) throws Exception {
        return ftfDao.getFollowedList(followed_id);
    }
}
