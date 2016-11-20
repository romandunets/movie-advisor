package movieAdvisor.services;

import movieAdvisor.dao.MovieImagesDao;
import movieAdvisor.model.MovieImages;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MovieImagesServicesImpl implements MovieImagesServices {
    @Autowired
    MovieImagesDao imageDao;

    public boolean addEntity(MovieImages image) throws Exception {
        return imageDao.addEntity(image);
    }

    public MovieImages getEntityById(long id) throws Exception {
        return imageDao.getEntityById(id);
    }

    public List<MovieImages> getEntityListByMovieId(long id) throws Exception {
        return imageDao.getEntityListByMovieId(id);
    }

    public boolean deleteEntity(long id) throws Exception {
        return imageDao.deleteEntity(id);
    }

    public boolean updateEntity(MovieImages image) throws Exception {
        return imageDao.updateEntity(image);
    }
}
