CREATE DATABASE IF NOT EXISTS `movie_advisor`;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` TINYINT(3) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name_unique` (`name`)
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `salt` VARCHAR(128) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(50) DEFAULT NULL,
  `second_name` VARCHAR(50) DEFAULT NULL,
  `birthday` DATE DEFAULT NULL,
  `gender` BOOLEAN DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `role_id` TINYINT(3) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_username_unique` (`username`),
  UNIQUE KEY `user_email_unique` (`email`),
  CONSTRAINT `fk_users_to_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
);

CREATE TABLE IF NOT EXISTS `follower_to_followed` (
  `follower_id` BIGINT(20) NOT NULL,
  `followed_id` BIGINT(20) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_follower_to_followed_to_users` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_followed_to_followed_to_users` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`)
);

CREATE TABLE IF NOT EXISTS `movies` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `year` SMALLINT,
  `studio` VARCHAR(100) DEFAULT NULL,
  `producer` VARCHAR(100) DEFAULT NULL,
  `duration` INT(11) DEFAULT NULL,
  `age_restriction` TINYINT(2) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movie_title_unique` (`title`)
);

CREATE TABLE IF NOT EXISTS `genres` (
  `id` TINYINT(3) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `genre_name_unique` (`name`)
);

CREATE TABLE IF NOT EXISTS `movies_to_genres` (
  `movie_id` BIGINT(20) NOT NULL,
  `genre_id` TINYINT(3) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_movies_to_genres_to_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `fk_movies_to_genres_to_genres` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
);

CREATE TABLE IF NOT EXISTS `movie_images` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `link` VARCHAR(200) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `movie_id` BIGINT(20) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movie_images_unique` (`link`),
  CONSTRAINT `fk_movie_images_to_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

CREATE TABLE IF NOT EXISTS `users_to_movies` (
  `user_id` BIGINT(20) NOT NULL,
  `movie_id` BIGINT(20) NOT NULL,
  `rating` FLOAT(2, 2) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_users_to_movies_to_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_users_to_movies_to_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

CREATE TABLE IF NOT EXISTS `tags` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag_name_unique` (`name`)
);

CREATE TABLE IF NOT EXISTS `movies_to_tags` (
  `movie_id` BIGINT(20) NOT NULL,
  `tag_id` INT(11) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_movies_to_tags_to_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `fk_movies_to_tags_to_tags` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`)
);

CREATE TABLE IF NOT EXISTS `comments` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` TEXT DEFAULT NULL,
  `user_id` BIGINT(20) NOT NULL,
  `movie_id` BIGINT(20) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_comments_to_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_comments_to_movies` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);
