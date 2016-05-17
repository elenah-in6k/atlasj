package responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import core.entity.BodySystem;

/**
 * Created by gaial on 15.05.2016.
 */
public class BodySystemResponse {
    @JsonProperty
    private int id;

    @JsonProperty
    private String name;

    public BodySystemResponse(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public BodySystemResponse(BodySystem bodySystem) {
        this.id = bodySystem.getId();
        this.name = bodySystem.getName();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
