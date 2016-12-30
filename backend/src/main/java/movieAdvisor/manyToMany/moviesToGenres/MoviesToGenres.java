package movieAdvisor.manyToMany.moviesToGenres;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import movieAdvisor.genres.Genre;
import movieAdvisor.movie.Movie;


import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movies_to_genres")
@AssociationOverrides({
        @AssociationOverride(name = "pk.movie", joinColumns = @JoinColumn(name = "movie_id")),
        @AssociationOverride(name = "pk.genre", joinColumns = @JoinColumn(name = "genre_id"))
})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class MoviesToGenres implements Serializable{
    private MovieToGenrePK pk = new MovieToGenrePK();

    @EmbeddedId
    public MovieToGenrePK getPk() {
        return pk;
    }
    public void setPk(MovieToGenrePK pk) {
        this.pk = pk;
    }

    public MoviesToGenres(long movieId, int genreId) {
        this.pk = new MovieToGenrePK(new Movie(movieId), new Genre(genreId));
    }

    public MoviesToGenres(Movie movie, Genre genre) {
        this.pk = new MovieToGenrePK(movie, genre);
    }


    public MoviesToGenres() {}

    @Transient
    public Movie getMovie() {
        return this.pk.getMovie();
    }
    public void setMovie(Movie movie) {
        pk.setMovie(movie);
    }

    @Transient
    public Genre getGenre() {
        return this.pk.getGenre();
    }
    public void setGenre(Genre genre) {
        pk.setGenre(genre);
    }

}

@Embeddable
class MovieToGenrePK implements Serializable {
    private Movie movie;
    private Genre genre;

    public MovieToGenrePK(Movie movie, Genre genre) {
        this.movie = movie;
        this.genre = genre;
    }

    public MovieToGenrePK() {}

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public Movie getMovie() {
        return movie;
    }
    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public Genre getGenre() {
        return genre;
    }
    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}
