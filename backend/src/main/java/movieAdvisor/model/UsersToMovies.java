package movieAdvisor.model;

import movieAdvisor.services.MovieServices;
import movieAdvisor.services.UserServices;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "users_to_movies")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UsersToMovies extends AbstractTimestampEntity implements Serializable{
    @Id
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id", referencedColumnName = "id", nullable = false)
    private Movie movie;

    @Column(precision = 1, scale = 3)
    private float rating;

    public UsersToMovies() {}
    public UsersToMovies(long user_id, long  movie_id) throws Exception {
        this.movie = new Movie(movie_id);
        this.user = new User(user_id);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

}
