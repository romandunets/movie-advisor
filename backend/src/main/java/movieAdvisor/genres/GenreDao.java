package movieAdvisor.genres;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
public interface GenreDao {
        public boolean addEntity(Genre genre) throws Exception;
        public Genre getEntityById(int id) throws Exception;
        public List<Genre> getEntityList() throws Exception;
        public boolean deleteEntity(int id) throws Exception;
        public boolean updateEntity(Genre genre) throws Exception;
}
