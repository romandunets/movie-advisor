SELECT `movie_id`, COUNT(*)
FROM `users_to_movies`
INNER JOIN (
  SELECT `users`.`id`
  FROM `users`
  INNER JOIN `users_to_movies`
  ON `users`.`id` = `users_to_movies`.`user_id`
  WHERE `users_to_movies`.`movie_id` IN (
    SELECT `movie_id`
    FROM `users_to_movies`
    WHERE `user_id` = 1
  )
  AND `users_to_movies`.`user_id` <> 1
) matching_users
ON `users_to_movies`.`user_id` = `matching_users`.`id`
AND `users_to_movies`.`movie_id` NOT IN (
  SELECT `movie_id`
  FROM `users_to_movies`
  WHERE `user_id` = 1
)
GROUP BY `movie_id`;

