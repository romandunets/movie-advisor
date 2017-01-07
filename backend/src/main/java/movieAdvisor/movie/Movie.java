package movieAdvisor.movie;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import movieAdvisor.manyToMany.usersToMovies.UsersToMovies;
import movieAdvisor.model.AbstractTimestampEntity;
import movieAdvisor.manyToMany.moviesToGenres.MoviesToGenres;
import movieAdvisor.manyToMany.moviesToTags.MoviesToTags;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by eaonmov on 11/15/16.
 */
@Entity
@Table(name = "movies")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonDeserialize(using = MovieDeserializer.class)
@JsonSerialize(using = MovieSerializer.class)
public class Movie  extends AbstractTimestampEntity implements Serializable {
    private long id;
    private String title;
    private int year;
    private String studio;
    private String producer;
    private int duration;
    private String coverImage;
    private int ageRestriction = 0;
    private String description;
    private List<UsersToMovies> usersMovies = new ArrayList<UsersToMovies>();

    private List<MoviesToGenres> movieGenres = new ArrayList<MoviesToGenres>();
    private Set<Integer> genres = new HashSet<Integer>(0);

    private List<MoviesToTags> moviesTags = new ArrayList<MoviesToTags>();
    private Set<Integer> tags = new HashSet<Integer>(0);

    private Float rate;
    private Integer match;
    private Boolean isWatched;
    private Float userRate;

    public Movie(long id) {
        this.id = id;
    }
    public Movie() {}
    public Movie(int id, String title, int year, String studio,
                 String producer, int duration, String coverImage,
                 int ageRestriction, String description, Set<Integer> genres,
                 Set<Integer> tags) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.studio = studio;
        this.producer = producer;
        this.duration = duration;
        this.coverImage = coverImage;
        this.ageRestriction = ageRestriction;
        this.description = description;
        this.genres = genres;
        this.tags = tags;
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

    @Transient
    public Float getRate() {
        return rate;
    }
    public void setRate(Float rate) {
        this.rate = rate;
    }

    @Transient
    public Integer getMatch() {
        return match;
    }
    public void setMatch(Integer match) {
        this.match = match;
    }

    @Transient
    public Float getUserRate() {
        return userRate;
    }
    public void setUserRate(Float userRate) {
        this.userRate = userRate;
    }

    @Transient
    public Boolean getWatched() {
        return isWatched;
    }
    public void setWatched(Boolean watched) {
        isWatched = watched;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.movie", cascade = CascadeType.ALL)
    public List<MoviesToTags> getMoviesTags() {
        return moviesTags;
    }
    public void setMoviesTags(List<MoviesToTags> moviesTags) {
        this.moviesTags = moviesTags;
    }

    @Transient
    public Set<Integer> getTags() {
        return tags;
    }
    public void setTags(Set<Integer> tags) {
        this.tags = tags;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.movie", cascade = CascadeType.ALL)
    public List<MoviesToGenres> getMovieGenres() {
        return movieGenres;
    }
    public void setMovieGenres(List<MoviesToGenres> movieGenres) {
        this.movieGenres = movieGenres;
    }

    @Transient
    public Set<Integer> getGenres() {
        return genres;
    }
    public void setGenres(Set<Integer> genres) {
        this.genres = genres;
    }

    @Column()
    public String getCoverImage() {
        return coverImage;
    }
    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }


    @Column(nullable = false, unique = true)
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    @Column
    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }

    @Column
    public String getStudio() {
        return studio;
    }
    public void setStudio(String studio) {
        this.studio = studio;
    }

    @Column
    public String getProducer() {
        return producer;
    }
    public void setProducer(String producer) {
        this.producer = producer;
    }

    @Column
    public int getDuration() {
        return duration;
    }
    public void setDuration(int duration) {
        this.duration = duration;
    }

    @Column
    public int getAgeRestriction() {
        return ageRestriction;
    }
    public void setAgeRestriction(int ageRestriction) {
        this.ageRestriction = ageRestriction;
    }

    @Column
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.movie", cascade = CascadeType.ALL)
    public List<UsersToMovies> getUsersMovies() {
        return usersMovies;
    }
    public void setUsersMovies(List<UsersToMovies> usersMovies) {
        this.usersMovies = usersMovies;
    }
}
