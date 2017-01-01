package movieAdvisor.manyToMany.followerToFollowed;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import movieAdvisor.model.AbstractTimestampEntity;
import movieAdvisor.user.User;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/13/16.
 */

@Entity
@Table(name = "follower_to_followed")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class FollowerToFollowed extends AbstractTimestampEntity implements Serializable {
    private User follower;
    private User followed;

    public FollowerToFollowed() {}

    public FollowerToFollowed(long followerId, long followedId) {
        this.followed = new User(followedId);
        this.follower = new User(followerId);
    }

    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "follower_id", referencedColumnName="id")
    public User getFollower() {
        return follower;
    }
    public void setFollower(User follower) {
        this.follower = follower;
    }

    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "followed_id", referencedColumnName="id")
    public User getFollowed() {
        return followed;
    }
    public void setFollowed(User followed) {
        this.followed = followed;
    }
}
