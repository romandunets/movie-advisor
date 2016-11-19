package movieAdvisor.services;

import movieAdvisor.dao.FollowerToFollowedDao;
import movieAdvisor.model.FollowerToFollowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
