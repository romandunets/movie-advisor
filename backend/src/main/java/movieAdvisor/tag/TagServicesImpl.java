package movieAdvisor.tag;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/15/16.
 */
public class TagServicesImpl implements TagServices{
    @Autowired
    TagDao tagDao;

    public boolean addEntity(Tag tag) throws Exception {
        return tagDao.addEntity(tag);
    }

    public Tag getEntityById(int id) throws Exception {
        return tagDao.getEntityById(id);
    }

    public List<Tag> getEntityList() throws Exception {
        return tagDao.getEntityList();
    }

    public boolean deleteEntity(int id) throws Exception {
        return tagDao.deleteEntity(id);
    }

    public boolean updateEntity(Tag tag) throws Exception {
        return tagDao.updateEntity(tag);
    }
}
