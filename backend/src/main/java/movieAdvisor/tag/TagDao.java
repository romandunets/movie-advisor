package movieAdvisor.tag;

/**
 * Created by eaonmov on 11/15/16.
 */

import movieAdvisor.tag.Tag;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
public interface TagDao {
    boolean addEntity(Tag genre) throws Exception;
    Tag getEntityById(int id) throws Exception;
    List<Tag> getEntityList() throws Exception;
    boolean deleteEntity(int id) throws Exception;
    boolean updateEntity(Tag genre) throws Exception;
}
