package movieAdvisor.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class User extends AbstractTimestampEntity implements Serializable {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private long id;

	@Column(name = "username", nullable = false, unique =  true)
	private String username;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "salt")
	private String salt;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "second_name")
	private String secondName;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "birthday")
	private Date birthday;

	@Column(name = "gender")
	private Boolean gender;

	@Column(name = "description")
	private String description;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "role_id", referencedColumnName = "id")
	private Role role;
/*
	@OneToMany(mappedBy="follower", fetch = FetchType.LAZY)
	private Set<FollowerToFollowed> followerList;

	@OneToMany(mappedBy="followed", fetch = FetchType.LAZY)
	private Set<FollowerToFollowed> followedList;
*/
	public User() {
		this.role = new Role();
	}

	public User(long id) {
		this.role = new Role();
		this.id = id;

	}
/*
	public Set<FollowerToFollowed> getFollowerList() {
		return followerList;
	}

	public void setFollowerList(Set<FollowerToFollowed> followerList) {
		this.followerList = followerList;
	}

	public Set<FollowerToFollowed> getFollowedList() {
		return followedList;
	}

	public void setFollowedList(Set<FollowerToFollowed> followedList) {
		this.followedList = followedList;
	}
*/
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public Boolean getGender() {
		return gender;
	}

	public void setGender(Boolean gender) {
		this.gender = gender;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSecondName() {
		return secondName;
	}

	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
