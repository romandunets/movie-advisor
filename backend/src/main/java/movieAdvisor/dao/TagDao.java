package movieAdvisor.dao;

/**
 * Created by eaonmov on 11/15/16.
 */

import movieAdvisor.model.Tag;

import java.util.List;

/**
 * Created by eaonmov on 11/14/16.
 */
public interface TagDao {
    public boolean addEntity(Tag genre) throws Exception;
    public Tag getEntityById(int id) throws Exception;
    public List<Tag> getEntityList() throws Exception;
    public boolean deleteEntity(int id) throws Exception;
    public boolean updateEntity(Tag genre) throws Exception;
}
