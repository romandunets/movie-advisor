package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movies_to_tags")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class MoviesToTags implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id", referencedColumnName = "id", nullable = false)
    private Tag tag;

    public Tag getTag() {
        return tag;
    }

    public MoviesToTags() {}

    public MoviesToTags(long movie_id, int tag_id) {
        this.movie = new Movie(movie_id);
        this.tag = new Tag(tag_id);
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    @Id
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id", referencedColumnName = "id", nullable = false)
    private Movie movie;


}
