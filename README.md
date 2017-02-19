# Movie Advisor

Movie Advisor is a web service intended to provide a personalized list of recommended movies for user. The main idea behind the web application is to verify alternative information retrieval approach based on fetching movies from watch list of other users with the most similar preferences. In this way the service creates personalized recommendations list using hidden social connections.

The main feature of the web service is a search engine which proposes movies that potentially are the most interesting for a user. The search does not require any input from the user with the exception of basic information concerning watched movies and their relative rating. This information describes user preferences precisely enough to provide a good recommendations even if the user prefers a wide range of genres and movies. Even without this information the web service is able to advice the most highly rated movies from the whole database.

## Components

The project contains three main components:
* Front-end single page application
The front-end component provides user interface as web-site, which can be accessed through the Internet. This is React application used with Redux. Aditionaly, Bootstrap framework was used to provide generic design for the UI.
* Back-end REST API
Back-end is Java EE application used with Spring framework to provide REST API for the front-end application. This component handles HTTP requests from the front-end and responses with JSON data. In order to provide service with all the functionality, back-end works with data in the database using JPA / Hibernate.
* Database
MySQL database is used as the main storage for the service accessed by the back-end component.

## Functionality

* Recommend movies (list)
* Personal list of rated (watched) movies
  * List all rated (watched) movies
  * Rate movie
* Movies CRUD
  * List all movies
  * Show movie details
  * Create new movie
  * Update existing movie
  * Delete existing movie
* Users CRUD
  * List all users
  * Show user details
  * Create new user
  * Update existing user
  * Delete existing user
* Authentication and profile
  * Sign up
  * Sign in
  * Logout
  * Show own profile details
  * Update own profile
  * Delete own profile
