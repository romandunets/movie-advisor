package movieAdvisor.services;

import movieAdvisor.dao.MoviesToGenresDao;
import movieAdvisor.model.MoviesToGenres;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MoviesToGenresServicesImpl implements MoviesToGenresServices{

    @Autowired
    MoviesToGenresDao mtgDao;

    public boolean addEntity(MoviesToGenres mtg) throws Exception {
        return mtgDao.addEntity(mtg);
    }

    public MoviesToGenres getEntityById(long movieId, int genreId) throws Exception {
        return mtgDao.getEntityById(movieId, genreId);
    }

    public List<MoviesToGenres> getEntityList() throws Exception {
        return mtgDao.getEntityList();
    }

    public boolean deleteEntity(long movieId, int genreId) throws Exception {
        return mtgDao.deleteEntity(movieId, genreId);
    }

    public List<MoviesToGenres> getMovieGenreList(long movieId) throws Exception {
        return mtgDao.getGenresList(movieId);
    }
}
