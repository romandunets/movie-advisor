package movieAdvisor.role;

import movieAdvisor.role.Role;

import java.util.List;

/**
 * Created by eaonmov on 11/13/16.
 */
public interface RoleDao {
    boolean addEntity(Role role) throws Exception;
    Role getEntityById(int id) throws Exception;
    List<Role> getEntityList() throws Exception;
    boolean deleteEntity(int id) throws Exception;
    boolean updateEntity(Role role) throws Exception;
}
