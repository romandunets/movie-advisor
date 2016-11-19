package movieAdvisor.services;

import movieAdvisor.dao.MoviesToTagsDao;
import movieAdvisor.model.MoviesToTags;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class MoviesToTagsServicesImpl implements  MoviesToTagsServices{
    @Autowired
    MoviesToTagsDao mttDao;

    public boolean addEntity(MoviesToTags mtt) throws Exception {
        return mttDao.addEntity(mtt);
    }

    public List<MoviesToTags> getMoviesByTags(int tagId) throws Exception {
        return mttDao.getMoviessList(tagId);
    }

    public boolean deleteEntity(long movieId, int tagId) throws Exception {
        return mttDao.deleteEntity(tagId, movieId);
    }

    public List<MoviesToTags> getTagsByMovies(long movieId) throws Exception {
        return mttDao.getTagList(movieId);
    }
}
