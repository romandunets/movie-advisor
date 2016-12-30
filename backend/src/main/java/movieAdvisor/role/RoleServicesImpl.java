package movieAdvisor.role;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public class RoleServicesImpl implements RoleServices {

    @Autowired
    RoleDao roleDao;

    public boolean addEntity(Role role) throws Exception {
        return roleDao.addEntity(role);
    }

    public Role getEntityById(int id) throws Exception {
        return roleDao.getEntityById(id);
    }

    public List<Role> getEntityList() throws Exception {
        return roleDao.getEntityList();
    }

    public boolean deleteEntity(int id) throws Exception {
        return roleDao.deleteEntity(id);
    }

    public boolean updateEntity(Role role) throws Exception {
        return roleDao.updateEntity(role);
    }


}
