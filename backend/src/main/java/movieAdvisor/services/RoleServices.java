package movieAdvisor.services;

import movieAdvisor.model.Role;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface RoleServices {
    public boolean addEntity(Role role) throws Exception;
    public Role getEntityById(int id) throws Exception;
    public List<Role> getEntityList() throws Exception;
    public boolean deleteEntity(int id) throws Exception;
    public boolean updateEntity(Role role) throws Exception;
}
