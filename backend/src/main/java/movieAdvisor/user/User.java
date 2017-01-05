package movieAdvisor.user;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import movieAdvisor.manyToMany.usersToMovies.UsersToMovies;
import movieAdvisor.model.AbstractTimestampEntity;
import movieAdvisor.role.Role;

@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@JsonDeserialize(using = UserDeserializer.class)
@JsonSerialize(using = UserSerializer.class)
public class User extends AbstractTimestampEntity implements Serializable {
	private long id;
	private String username;
	private String password;
	private String salt;
	private String firstName;
	private String secondName;
	private String email;
	private Date birthday;
	private Boolean gender;
	private String description;
	private Role role;
	private List<UsersToMovies> usersMovies = new ArrayList<UsersToMovies>();

	public User(){}

	public User(long id) {
		this.role = new Role();
		this.id = id;
	}
	public User (long id, Date birthday, String description,
				 String email, String firstName,
				 Boolean gender, String password,
				 String lastName, String username) {
		this.id = id;
		this.birthday = birthday;
		this.description = description;
		this.email = email;
		this.firstName = firstName;
		this.secondName = lastName;
		this.gender = gender;
		this.password = password;
		this.username = username;
		this.salt = "Dummy salt :)";
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

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "role", referencedColumnName = "id", nullable = false)
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.user", cascade = CascadeType.ALL)
	public List<UsersToMovies> getUsersMovies() {
		return usersMovies;
	}
	public void setUsersMovies(List<UsersToMovies> usersMovies) {
		this.usersMovies = usersMovies;
	}

	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "salt")
	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}

	@Column(name = "birthday")
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	@Column(name = "gender")
	public Boolean getGender() {
		return gender;
	}
	public void setGender(Boolean gender) {
		this.gender = gender;
	}

	@Column(name = "description")
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "username", nullable = false, unique =  true)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "first_name")
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "second_name")
	public String getSecondName() {
		return secondName;
	}
	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	@Column(name = "email", nullable = false, unique = true)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
