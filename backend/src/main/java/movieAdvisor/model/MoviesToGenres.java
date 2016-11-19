package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */

@Entity
@Table(name = "movies_to_genres")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class MoviesToGenres implements Serializable{


    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "movie_id", referencedColumnName="id")
    private Movie movie;

    @Id
    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "genre_id", referencedColumnName="id")
    private Genre genre;

    public MoviesToGenres(long movieId, int genreId) {
        this.movie = new Movie(movieId);
        this.genre = new Genre(genreId);
    }

    public MoviesToGenres() {}

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}
