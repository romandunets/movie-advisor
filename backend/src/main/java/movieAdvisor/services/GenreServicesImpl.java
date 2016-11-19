package movieAdvisor.services;

import movieAdvisor.dao.GenreDao;
import movieAdvisor.model.Genre;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
public class GenreServicesImpl implements GenreServices {
    @Autowired
    GenreDao genreDao;

    public boolean addEntity(Genre genre) throws Exception {
        return genreDao.addEntity(genre);
    }

    public Genre getEntityById(int id) throws Exception {
        return genreDao.getEntityById(id);
    }

    public List<Genre> getEntityList() throws Exception {
        return genreDao.getEntityList();
    }

    public boolean deleteEntity(int id) throws Exception {
        return genreDao.deleteEntity(id);
    }

    public boolean updateEntity(Genre genre) throws Exception {
        return genreDao.updateEntity(genre);
    }
}
