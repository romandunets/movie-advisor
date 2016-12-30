package movieAdvisor.manyToMany.movieImages;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import movieAdvisor.movie.Movie;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movie_images")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonDeserialize(using = MovieImagesDeserializer.class)
public class MovieImages implements Serializable {
    private long id;
    private String name;
    private String link;
    private String type;
    private Movie movie;

    public MovieImages(){}

    public MovieImages(long id) {
        this.id = id;
    }

    @Id
    @GeneratedValue
    @Column(name = "id")
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(nullable = false, unique = true)
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }

    @Column(nullable = false)
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    public Movie getMovie() {
        return movie;
    }
    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
