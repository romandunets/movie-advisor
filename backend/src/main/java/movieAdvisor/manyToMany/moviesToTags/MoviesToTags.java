package movieAdvisor.manyToMany.moviesToTags;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import movieAdvisor.movie.Movie;
import movieAdvisor.tag.Tag;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movies_to_tags")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@AssociationOverrides({
        @AssociationOverride(name = "pk.tag", joinColumns = @JoinColumn(name = "tag_id")),
        @AssociationOverride(name = "pk.movie", joinColumns = @JoinColumn(name = "movie_id"))
})
public class MoviesToTags implements Serializable {

    private MoviesToTagsPK pk = new MoviesToTagsPK();

    public MoviesToTags() {}

    public MoviesToTags(long movieId, int tagId) {
        this.pk = new MoviesToTagsPK(new Tag(tagId), new Movie(movieId));
    }

    public MoviesToTags(Movie movie, Tag tag) {
        this.pk = new MoviesToTagsPK(tag, movie);
    }

    @EmbeddedId
    public MoviesToTagsPK getPk() {
        return pk;
    }
    public void setPk(MoviesToTagsPK pk) {
        this.pk = pk;
    }

    @Transient
    public Movie getMovie() {
        return pk.getMovie();
    }
    public void setMovie(Movie movie) {
        pk.setMovie(movie);
    }

    @Transient
    public Tag getTag() {
        return pk.getTag();
    }
    public void setTag(Tag tag) {
        pk.setTag(tag);
    }


}

@Embeddable
class MoviesToTagsPK implements Serializable {
    private Tag tag;
    private Movie movie;

    public MoviesToTagsPK(Tag tag, Movie movie) {
        this.tag = tag;
        this.movie = movie;
    }

    public MoviesToTagsPK() { }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public Tag getTag() {
        return tag;
    }
    public void setTag(Tag tag) {
        this.tag = tag;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public Movie getMovie() {
        return movie;
    }
    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}

