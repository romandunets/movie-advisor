package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by eaonmov on 11/14/16.
 */
@Entity
@Table(name = "genres")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Genre implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    public Genre(int id) {
        this.id = id;
    }

    public Genre() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
