package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/13/16.
 */

@Entity
@Table(name = "follower_to_followed")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class FollowerToFollowed extends AbstractTimestampEntity implements Serializable {
    // TODO: fix that create accepts non-unique records
    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "follower_id", referencedColumnName="id")
    private User follower;

    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "followed_id", referencedColumnName="id")
    private User followed;


    public FollowerToFollowed() {}

    public FollowerToFollowed(long followerId, long followedId) {
        this.followed = new User(followedId);
        this.follower = new User(followerId);
    }

    public User getFollower() {
        return follower;
    }

    public void setFollower(User follower) {
        this.follower = follower;
    }

    public User getFollowed() {
        return followed;
    }

    public void setFollowed(User followed) {
        this.followed = followed;
    }

    public String toString() {
        return "follower_id: " + follower + ", followed_id:" + followed;
    }
}
