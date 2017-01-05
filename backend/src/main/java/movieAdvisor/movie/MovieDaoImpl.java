package movieAdvisor.movie;

import movieAdvisor.genres.Genre;
import movieAdvisor.manyToMany.moviesToGenres.MoviesToGenres;
import movieAdvisor.manyToMany.moviesToGenres.MoviesToGenresDao;
import movieAdvisor.manyToMany.moviesToTags.MoviesToTags;
import movieAdvisor.manyToMany.usersToMovies.UsersToMovies;
import movieAdvisor.tag.Tag;
import movieAdvisor.user.User;
import org.hibernate.*;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigInteger;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieDaoImpl implements MovieDao {
    @Autowired
    SessionFactory sessionFactory;
    Session session;
    Transaction tx = null;

    public MovieDaoImpl() {
        session = null;
    }

    public boolean addEntity(Movie movie) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(movie);
        for (Integer genreId : movie.getGenres()) {
            Genre genre = (Genre) session.get(Genre.class, genreId);
            MoviesToGenres moviesToGenres = new MoviesToGenres(movie, genre);
            session.save(moviesToGenres);
        }

        for (Integer tagId : movie.getTags()) {
            Tag tag = (Tag) session.get(Tag.class, tagId);
            MoviesToTags moviesToTags = new MoviesToTags(movie, tag);
            session.save(moviesToTags);
        }

        tx.commit();
        session.close();
        return false;
    }

    public Movie getEntityById(Long movieId, Long userId) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        Movie movie;
        movie = (Movie) session.load(Movie.class, new Long(movieId));
        assignGenresToMovie(movie);
        assignTagsToMovie(movie);
        setOverallMovieRate(movie);
        setUserRate(movie, userId);
        for (Movie movieWithMatch : getRecommendedMovieListWithMatch(userId)) {
            if (movie.getId() == movieWithMatch.getId()) {
                movie.setMatch(movieWithMatch.getMatch());
                break;
            }
        }
        tx.commit();
        session.close();
        return movie;
    }

    public MoviesListPaging getEntityList(MovieSearchDTO movieSearch) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();

        Criteria criteria = session.createCriteria(Movie.class);
        if (movieSearch.sortBy != null)
            for (String orderCriteria : movieSearch.sortBy)
                criteria.addOrder(
                        (movieSearch.orderType.equals("desc")) ? Order.desc(orderCriteria) : Order.asc(orderCriteria)
                );

        if (movieSearch.year != null)
            criteria.add(Restrictions.like("year", movieSearch.year));

        if (movieSearch.title != null)
            criteria.add(Restrictions.like("title", movieSearch.title));

        if (movieSearch.freeSearch != null) {
            Disjunction disCriteria = Restrictions.disjunction();
            disCriteria.add(Restrictions.like("title", "%" + movieSearch.freeSearch + "%"));
            disCriteria.add(Restrictions.like("description", "%" + movieSearch.freeSearch + "%"));
            disCriteria.add(Restrictions.like("producer", "%" + movieSearch.freeSearch + "%"));
            disCriteria.add(Restrictions.like("studio", "%" + movieSearch.freeSearch + "%"));
            criteria.add(disCriteria);
        }

        if (movieSearch.userIdRestriction) {
            Criteria userIdCriteria = session.createCriteria(UsersToMovies.class);
            userIdCriteria.add(Restrictions.eq("pk.user", new User(movieSearch.userId)));
            userIdCriteria.setProjection(Projections.property("pk.movie"));
            List<Movie> moviesForUser = (List<Movie>) userIdCriteria.list();

            if (moviesForUser == null || moviesForUser.size() == 0)
                return new MoviesListPaging(0, 0, 0, new ArrayList<Movie>());

            List<Long> moviesForUserIds = new ArrayList<Long>();
            for (Movie movie : moviesForUser) moviesForUserIds.add(movie.getId());
            criteria.add(Restrictions.in("id", moviesForUserIds));
        }

        if (movieSearch.genre_id != null) {
            Criteria movieIdsCriteria = session.createCriteria(MoviesToGenres.class);
            movieIdsCriteria.add(Restrictions.eq("pk.genre", movieSearch.genre_id));
            movieIdsCriteria.setProjection(Projections.property("pk.movie"));

            List<Movie> moviesForGenre = (List<Movie>) movieIdsCriteria.list();

            if (moviesForGenre == null || moviesForGenre.size() == 0)
                return new MoviesListPaging(0, 0, 0, new ArrayList<Movie>());

            List<Long> moviesForGenreIds = new ArrayList<Long>();
            for (Movie movie : moviesForGenre) moviesForGenreIds.add(movie.getId());
            criteria.add(Restrictions.in("id", moviesForGenreIds));
        }

        if (movieSearch.description != null)
            criteria.add(Restrictions.like("description", "%" + movieSearch.description + "%"));
        if (movieSearch.duration != null)
            criteria.add(Restrictions.like("duration", movieSearch.duration));

        Integer numOfPages = criteria.list().size() / movieSearch.moviesPerPage;
        numOfPages += (criteria.list().size() % movieSearch.moviesPerPage == 0) ? 0 : 1;
        criteria.setFirstResult(movieSearch.moviesPerPage * (movieSearch.pageNumber - 1));
        criteria.setMaxResults(movieSearch.moviesPerPage);

        List<Movie> movieList = criteria.list();
        for (Movie movie : movieList) {
            assignGenresToMovie(movie);
            assignTagsToMovie(movie);
            setOverallMovieRate(movie);
            setUserRate(movie, movieSearch.userId);
        }

        List<Movie> recommendedMovies = getRecommendedMovieListWithMatch(movieSearch.userId);
        setMoviesMatch(movieList, recommendedMovies);

        tx.commit();
        session.close();
        return new MoviesListPaging(movieSearch.moviesPerPage, movieSearch.pageNumber, numOfPages, movieList);
    }

    public List<Movie> getRecommendedMovies(Long userId) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<Movie> recommendedMovies = getRecommendedMovieListWithMatch(userId);
        for (Movie movie : recommendedMovies) {
            assignGenresToMovie(movie);
            assignTagsToMovie(movie);
            setOverallMovieRate(movie);
            setUserRate(movie, userId);
        }
        tx.commit();
        session.close();
        return recommendedMovies;
    }

    private void setMoviesMatch(List<Movie> moviesList, List<Movie> recommendedMovies) {
        for (Movie movie : moviesList) {
            for (Movie curRecMovie : recommendedMovies) {
                if (movie.getId() == curRecMovie.getId()) {
                    movie.setMatch(curRecMovie.getMatch());
                }
            }
        }
    }

    private List<Movie> getRecommendedMovieListWithMatch(Long userId) {
        List<Object> objList = session.createSQLQuery("SELECT `movie_id`, COUNT(*) " +
                "FROM `users_to_movies` " +
                "INNER JOIN ( " +
                "  SELECT `users`.`id` " +
                "  FROM `users` " +
                "  INNER JOIN `users_to_movies` " +
                "  ON `users`.`id` = `users_to_movies`.`user_id` " +
                "  WHERE `users_to_movies`.`movie_id` IN ( " +
                "    SELECT `movie_id` " +
                "    FROM `users_to_movies` " +
                "    WHERE `user_id` = :u_id " +
                "  ) " +
                "  AND `users_to_movies`.`user_id` <> :u_id " +
                ") matching_users " +
                "ON `users_to_movies`.`user_id` = `matching_users`.`id` " +
                "AND `users_to_movies`.`movie_id` NOT IN ( " +
                "  SELECT `movie_id` " +
                "  FROM `users_to_movies` " +
                "  WHERE `user_id` = :u_id " +
                ") " +
                "GROUP BY `movie_id`;")
                .setParameter("u_id", userId).list();

        if (objList.size() == 0) {
            objList = session.createSQLQuery(
                    "SELECT `movie_id`, COUNT(*) " +
                            "FROM `users_to_movies` " +
                            "WHERE `users_to_movies`.`movie_id` NOT IN ( " +
                            "  SELECT `movie_id` " +
                            "  FROM `users_to_movies` " +
                            "  WHERE `user_id` = :u_id " +
                            ") " +
                            "GROUP BY `movie_id`;")
                    .setParameter("u_id", userId).list();
        }
        List<Movie> recommendedMovies = new ArrayList<Movie>();
        Long maxValue = new Long(0);
        for (Object obj : objList) {
            Object[] tuple = (Object[]) obj;
            Movie movie = (Movie) session.load(Movie.class, ((BigInteger) (tuple[0])).longValue());
            if (maxValue.equals(new Long(0)))
                maxValue = ((BigInteger) (tuple[1])).longValue();
            Float match = (((BigInteger) (tuple[1])).floatValue() / maxValue) * 100;
            movie.setMatch(Math.round(match));
            recommendedMovies.add(movie);
        }
        return recommendedMovies;
    }

    public boolean deleteEntity(Long id) throws Exception {
        session = sessionFactory.openSession();
        Object o = session.load(Movie.class, id);
        tx = session.getTransaction();
        session.beginTransaction();
        session.delete(o);
        tx.commit();
        return false;
    }

    public Movie updateEntity(Movie movie) throws Exception {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.update(movie);
        tx.commit();
        session.close();
        return movie;
    }

    private void setUserRate(Movie movie, Long userId) {
        String sqlQuery = "select p.rating from UsersToMovies p where p.pk.user=:user_id and p.pk.movie=:movie_id";
        List<Float> rateList = session.createQuery(sqlQuery).setParameter("user_id", new User(userId))
                .setParameter("movie_id", movie).list();
        if (rateList != null && rateList.size() != 0) {
            movie.setUserRate(rateList.get(0));
            movie.setWatched(true);
        } else {
            movie.setUserRate(new Float(0));
            movie.setWatched(false);
        }
    }

    private void setOverallMovieRate(Movie movie) {
        String sqlQuery = "select avg (p.rating) from UsersToMovies p where p.pk.movie=:id";
        Query query = session.createQuery(sqlQuery).setParameter("id", new Movie(movie.getId()));
        Double overallRate = (Double) query.list().get(0);
        if (overallRate != null) {
            movie.setRate(Float.parseFloat(new DecimalFormat("#.#").format(overallRate)));
        } else {
            movie.setRate(new Float(0));
        }
    }

    private void assignGenresToMovie(Movie movie) {
        Query query = session.createQuery("from MoviesToGenres p where p.pk.movie=:id");
        query.setParameter("id", movie);
        List<MoviesToGenres> genreList = query.list();
        movie.setMovieGenres(genreList);
    }

    private void assignTagsToMovie(Movie movie) {
        Query query = session.createQuery("from MoviesToTags p where p.pk.movie=:id");
        query.setParameter("id", movie);
        List<MoviesToTags> tagsList = query.list();
        movie.setMoviesTags(tagsList);
    }
}
