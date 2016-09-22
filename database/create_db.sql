CREATE DATABASE IF NOT EXISTS `movie_advisor`;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
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
  `role_id` BIGINT(20) NOT NULL,
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
