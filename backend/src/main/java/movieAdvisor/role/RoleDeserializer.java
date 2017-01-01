package movieAdvisor.role;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

/**
 * Created by eaonmov on 12/28/16.
 */
public class RoleDeserializer extends JsonDeserializer<Role> {
    @Override
    public Role deserialize(JsonParser jsonParser,
                            DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        Role role = new Role();
        if (node.has("id")) role.setId(node.get("id").asInt());
        if (node.has("name"))
            role.setName(node.get("name").asText());
        else
            throw new IOException("Name of the role not specified");
        if (node.has("description"))
            role.setDescription(node.get("description").asText());
        return role;
    }
}
