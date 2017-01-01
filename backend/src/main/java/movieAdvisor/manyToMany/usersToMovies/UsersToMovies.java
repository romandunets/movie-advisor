package movieAdvisor.manyToMany.usersToMovies;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import movieAdvisor.model.AbstractTimestampEntity;
import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "users_to_movies")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonDeserialize(using = UsersToMoviesDeserializer.class)
@AssociationOverrides({
        @AssociationOverride(name = "pk.movie", joinColumns = @JoinColumn(name = "movie_id")),
        @AssociationOverride(name = "pk.user", joinColumns = @JoinColumn(name = "user_id"))
})
public class UsersToMovies extends AbstractTimestampEntity implements Serializable{
    private UserToMoviesPK pk = new UserToMoviesPK();
    private float rating;

    public UsersToMovies() {}

    public UsersToMovies(Long userId, Long movieId) {
        pk = new UserToMoviesPK(new User(userId), new Movie(movieId));
    }

    public UsersToMovies(long userId, long  movieId, float rating) throws Exception {
        pk = new UserToMoviesPK(new User(userId), new Movie(movieId));
        this.rating = rating;
    }

    public UsersToMovies(User user, Movie movie, float rating) throws Exception {
        pk = new UserToMoviesPK(user, movie);
        this.rating = rating;
    }

    @Column(precision = 1, scale = 3)
    public float getRating() {
        return rating;
    }
    public void setRating(float rating) {
        this.rating = rating;
    }

    @EmbeddedId
    public UserToMoviesPK getPk() {
        return pk;
    }
    public void setPk(UserToMoviesPK pk) {
        this.pk = pk;
    }

    @Transient
    public Movie getMovie() { return this.pk.getMovie();}
    public void setMovie(Movie movie) { this.pk.setMovie(movie);}

    @Transient
    public User getUser() { return this.pk.getUser();}
    public void setUser(User user) { this.pk.setUser(user);}


}

@Embeddable
class UserToMoviesPK implements Serializable {
    private User user;
    private Movie movie;

    public UserToMoviesPK(User genre, Movie movie) {
        this.movie = movie;
        this.user = genre;
    }

    public UserToMoviesPK() {}

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public Movie getMovie() {
        return movie;
    }
    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
