package movieAdvisor.tag;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public interface TagServices {
    public boolean addEntity(Tag tag) throws Exception;
    public Tag getEntityById(int id) throws Exception;
    public List<Tag> getEntityList() throws Exception;
    public boolean deleteEntity(int id) throws Exception;
    public boolean updateEntity(Tag tag) throws Exception;
}
