package movieAdvisor.genres;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import movieAdvisor.manyToMany.moviesToGenres.MoviesToGenres;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by eaonmov on 11/14/16.
 */
@Entity
@Table(name = "genres")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonSerialize(using = GenreSerializer.class)
public class Genre implements Serializable {
    private int id;
    private String name;
    private String description;
    private Set<MoviesToGenres> movieGenres = new HashSet<MoviesToGenres>();

    public Genre(int id) {
        this.id = id;
    }
    public Genre() {}

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.genre")
    public Set<MoviesToGenres> getMovieGenres() {
        return movieGenres;
    }
    public void setMovieGenres(Set<MoviesToGenres> movieGenres) {
        this.movieGenres = movieGenres;
    }

    @Id
    @GeneratedValue
    @Column(name = "id")
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
