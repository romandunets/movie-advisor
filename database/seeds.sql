INSERT INTO `roles` (`name`)
VALUES ('admin');

INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role_id`)
VALUES ('Tom', 'pass', 'tom@email.com', 'salt', 1);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role_id`)
VALUES ('Martin', 'pass', 'martin@email.com', 'salt', 1);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role_id`)
VALUES ('Jesika', 'pass', 'jesika@email.com', 'salt', 1);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role_id`)
VALUES ('John', 'pass', 'john@email.com', 'salt', 1);
INSERT INTO `users` (`username`, `password`, `email`, `salt`, `role_id`)
VALUES ('Alex', 'pass', 'alex@email.com', 'salt', 1);

INSERT INTO `movies` (`title`, `cover_image`)
VALUES ('Zootopia', `https://www.kinopoisk.ru/images/film_big/928391.jpg`);
INSERT INTO `movies` (`title`, `cover_image`)
VALUES ('The Martian', `https://www.kinopoisk.ru/images/film_big/928391.jpg`);
INSERT INTO `movies` (`title`, `cover_image`)
VALUES ('Mad Max', `https://www.kinopoisk.ru/images/film_big/928391.jpg`);
INSERT INTO `movies` (`title`, `cover_image`)
VALUES ('Gravity', `https://www.kinopoisk.ru/images/film_big/928391.jpg`);
INSERT INTO `movies` (`title`, `cover_image`)
VALUES ('Star Wars: Episode VII', `https://www.kinopoisk.ru/images/film_big/928391.jpg`);

INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (1, 1);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (2, 1);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (3, 1);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (1, 2);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (2, 2);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (1, 3);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (4, 3);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (2, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (3, 4);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (4, 5);
INSERT INTO `users_to_movies` (`user_id`, `movie_id`)
VALUES (5, 5);

