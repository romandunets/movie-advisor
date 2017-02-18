# Movie Advisor

Movie Advisor is a web service designed to provide an interactive and intelligent search of movies for user analyzing personal preferences. The main idea behind the web application is an algorithmic approach in search personalization based on selecting movies prefered by other users with the most similar preferences. In this way the system builds up personalized movie recommendations list using the power of the hidden social network.


The main feature of the web service is a search engine which proposes movies that potentially are the most interesting for a user. The search does not require any input from the user with the exception of basic information concerning watched movies and their relative rating. This information describes user preferences precisely enough even if he or she prefers different genres or types of movies to provide a good recommendations for movies to watch. Even without this information the web service is able to advice the most rated movies from the whole database.


This application has all the most important features inherent for typical film database services except of unique method used in advising movies for a user which is the core feature of the service. Consequently, the web application contains such features as marking movies as watched, rating movies, listing and searching movies. In addition to, the system has facilities to create, update and delete movies by administrators. Regular users can create their own lists, add prefered or watched movie and rate it. As the most of the typical services, Movie Advisor also has essential features for data personalizations like account registration, login and updating personal information.


## Compontents

The project contains three main components:
* Front-end single page application
The front-end component provides user interface as web-site, which can be accessed through the Internet. This is React application used with Redux. Aditionaly, Bootstrap framework was used to provide generic design for the UI.
* Back-end REST API
Back-end is Java EE application used with Spring framework to provide REST API for the front-end application. This component handles HTTP requests from the front-end and responses with JSON data. In order to provide service with all the functionality, back-end works with data in the database using JPA / Hibernate.
* Database
MySQL database is used as the main storage for the service accessed by the back-end component.
