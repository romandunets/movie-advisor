package movieAdvisor.tag;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import movieAdvisor.manyToMany.moviesToTags.MoviesToTags;

import javax.persistence.Entity;
import javax.persistence.Table;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
@Entity
@Table(name = "tags")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonSerialize(using = TagSerializer.class)
        public class Tag implements Serializable {
    private int id;
    private String name;
    private String description;
    private List<MoviesToTags> moviesTags = new ArrayList<MoviesToTags>();

    public Tag() {}
    public Tag(int id) {this.id = id;}

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.tag", cascade = CascadeType.ALL)
    public List<MoviesToTags> getMoviesTags() {
        return moviesTags;
    }
    public void setMoviesTags(List<MoviesToTags> moviesTags) {
        this.moviesTags = moviesTags;
    }
}
