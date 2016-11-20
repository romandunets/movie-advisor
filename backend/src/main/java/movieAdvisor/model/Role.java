package movieAdvisor.model;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonManagedReference;
import org.hibernate.annotations.*;
import org.hibernate.annotations.CascadeType;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Set;

/**
 * Created by eaonmov on 11/13/16.
 */
@Entity
@Table(name = "roles")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Role implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description")
    private String description;

    /*
    @OneToMany(mappedBy="role", fetch = FetchType.EAGER, cascade = javax.persistence.CascadeType.ALL) // TODO!! Fail to initialise lazily
    @JsonManagedReference
    private Set<User> userSet;
*/
    public Role() {
    }

 /*   public Set<User> getUser(){        return userSet;    }

    public void setUser(Set<User> user) {        this.userSet = user;    }
*/
    public String getDescriptions() {
        return description;
    }

    public void setDescriptions(String description) {
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
