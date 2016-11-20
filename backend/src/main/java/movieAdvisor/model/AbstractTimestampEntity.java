package movieAdvisor.model;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by eaonmov on 11/13/16.
 */
@MappedSuperclass
public abstract class AbstractTimestampEntity {
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date created_at;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updated_at;

    @PrePersist
    protected void onCreate() {
        updated_at = created_at = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updated_at = new Date();
    }
}
