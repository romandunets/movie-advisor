package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movie_images")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class MovieImages implements Serializable{
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;

    @Column(nullable = false)
    private String name;


    @Column(nullable = false, unique = true)
    private String link;

    @Column(nullable = false)
    private String type;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    private Movie movie;

    public MovieImages(){

    }

    public MovieImages(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
