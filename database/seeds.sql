use `movie_advisor1`;

/* ROLES */
INSERT INTO `roles` (`name`, `description`)
VALUES ('admin', 'web service administrator');
INSERT INTO `roles` (`name`, `description`)
VALUES ('user', 'web service user');

/* USERS */
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('Tom', 'pass', 'tom@email.com', 'salt', 2);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('Martin', 'pass', 'martin@email.com', 'salt', 2);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('Jesika', 'pass', 'jesika@email.com', 'salt', 2);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('John', 'pass', 'john@email.com', 'salt', 2);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('Alex', 'pass', 'alex@email.com', 'salt', 2);

/* ADMIN USERS*/
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role`)
VALUES ('Admin', 'admin', 'admin@email.com', 'salt', 1);

/* GENRES */
INSERT INTO `genres` (`name`, `description`)
VALUES ('comedy', 'Comedies are light-hearted plots consistently and deliberately designed to amuse and provoke laughter ');
INSERT INTO `genres` (`name`, `description`)
VALUES ('drama', 'Dramas are serious, plot-driven presentations, portraying realistic characters, settings, life situations, and stories involving intense character development and interaction.');
INSERT INTO `genres` (`name`, `description`)
VALUES ('horror', 'Horror films are designed to frighten and to invoke our hidden worst fears, often in a terrifying, shocking finale, while captivating and entertaining us at the same time in a cathartic experience. ');
INSERT INTO `genres` (`name`, `description`)
VALUES ('science fiction', 'Sci-fi films are often quasi-scientific, visionary and imaginative - complete with heroes, aliens, distant planets, impossible quests, improbable settings, fantastic places, great dark and shadowy villains, futuristic technology, unknown and unknowable forces, and extraordinary monsters (things or creatures from space), either created by mad scientists or by nuclear havoc. ');
INSERT INTO `genres` (`name`, `description`)
VALUES ('action', 'Action films usually include high energy, big-budget physical stunts and chases, possibly with rescues, battles, fights, escapes, destructive crises (floods, explosions, natural disasters, fires, etc.)');
INSERT INTO `genres` (`name`, `description`)
VALUES ('adventure', 'Adventure films are usually exciting stories, with new experiences or exotic locales, very similar to or often paired with the action film genre');
INSERT INTO `genres` (`name`, `description`)
VALUES ('crime & gangster', 'Crime (gangster) films are developed around the sinister actions of criminals or mobsters, particularly bankrobbers, underworld figures, or ruthless hoodlums who operate outside the law, stealing and murdering their way through life. ');

/* TAGS */
INSERT INTO `tags` (`name`, `description`)
VALUES('based on book','');
INSERT INTO `tags` (`name`, `description`)
VALUES('action hero','');
INSERT INTO `tags` (`name`, `description`)
VALUES('business','');
INSERT INTO `tags` (`name`, `description`)
VALUES('animals','');
INSERT INTO `tags` (`name`, `description`)
VALUES('battle','');
INSERT INTO `tags` (`name`, `description`)
VALUES('space','');

/* FOLLOWER TO FOLLOWED*/
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(1 , 1);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(1 , 2);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(1 , 3);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(2 , 3);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(2 , 1);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(2 , 4);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(3 , 2);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(3 , 4);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(4 , 1);
INSERT INTO `follower_to_followed` (`follower_id`, `followed_id`)
VALUES(4 , 2);

/* MOVIES */
INSERT INTO `movies` (`title`, `coverImage`, `duration`,
						`ageRestriction`, `description`, `year`,
						`studio`, `producer`)
VALUES ('Zootopia', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg', 108,
		0, 'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.', 2016,
        ' Walt Disney Animation Studios', '	Clark Spencer');

INSERT INTO `movies` (`title`, `coverImage`, `duration`,
						`ageRestriction`, `description`, `year`,
						`studio`, `producer`)
VALUES ('The Martian', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg', 144,
		10, 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.', 2015,
        ' 20th Century Fox ', ' Ridley Scott');

INSERT INTO `movies` (`title`, `coverImage`, `duration`,
						`ageRestriction`, `description`, `year`,
						`studio`, `producer`)
VALUES ('Mad Max', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDkzMWIwZGItYTgyNy00ZTU0LWE0NGMtYjAyNzUyMjE2MGE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 88,
		18, 'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.', 1980,
        'Australia studio', 'George Miller');

INSERT INTO `movies` (`title`, `coverImage`, `duration`,
						`ageRestriction`, `description`, `year`,
						`studio`, `producer`)
VALUES ('Gravity', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg', 91,
		16, 'A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space.', 2013	,
        ' Warner Bros. Pictures', 'Alfonso Cuarón');

INSERT INTO `movies` (`title`, `coverImage`, `duration`,
						`ageRestriction`, `description`, `year`,
						`studio`, `producer`)
VALUES ('Star Wars: Episode VII', 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg', 136,
		12, 'Approximately 30 years after the destruction of the second Death Star, the last remaining Jedi, Luke Skywalker, has disappeared. The First Order has risen from the fallen Galactic Empire and seeks to eliminate the New Republic. The Resistance, backed by the Republic and led by Luke\'s twin sister, General Leia Organa, opposes them while searching for Luke to enlist his aid.', 2015,
        'N/A', 'Kathleen Kennedy');

/* MOVIE IMAGES */

/* COMMENTS */
INSERT INTO `comments` (`movie_id`, `user_id`, `title`, `content`)
VALUES (1, 1, 'Nice', 'Good movie with nice animation!');
INSERT INTO `comments` (`movie_id`, `user_id`, `title`, `content`)
VALUES (2, 2, 'Ok', 'Good time');
INSERT INTO `comments` (`movie_id`, `user_id`, `title`, `content`)
VALUES (3, 3, 'Awesome', 'Everyone should watch it!');
INSERT INTO `comments` (`movie_id`, `user_id`, `title`, `content`)
VALUES (4, 4, 'Amazing', 'Ama ama');
INSERT INTO `comments` (`movie_id`, `user_id`, `title`, `content`)
VALUES (5, 5, 'Average', 'First here!');

/* MOVIES TO GENRES */
	/* Zootopia */
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (1, 1);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (6, 1);
	/* The Martian*/
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (1, 2);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (4, 2);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (6, 2);
	/* Mad Max*/    
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (2, 3);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (4, 3);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (5, 3);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (6, 3);
	/* Gravity */
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (2, 4);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (4, 4);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (6, 4);
	/* Star Wars: Episode VII */
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (2, 5);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (4, 5);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (5, 5);
INSERT INTO `movies_to_genres` (`genre_id`, `movie_id`)
values (6, 5);
    
/* MOVIES TO TAGS */
	/* Zootopia */
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (4, 1);
	/* The Martian*/
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (1, 2);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (2, 2);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (6, 2);
	/* Mad Max*/
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (1, 3);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (2, 3);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (5, 3);
	/* Gravity */
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (1, 4);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (6, 4);
	/* Star Wars: Episode VII */
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (6, 5);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (1, 5);
INSERT INTO `movies_to_tags` (`tag_id`, `movie_id`)
VALUES (5, 5);

/* USERS TO MOVIES */
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (1, 1, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (2, 1, 5);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (3, 1, 3);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (1, 2, 5);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (2, 2, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (1, 3, 3);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (4, 3, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (2, 4, 5);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (3, 4, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (4, 5, 3);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`, `rating`)
VALUES (5, 5, 5);