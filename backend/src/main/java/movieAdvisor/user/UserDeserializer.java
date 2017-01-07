package movieAdvisor.user;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import movieAdvisor.role.Role;
import movieAdvisor.role.RoleServices;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by eaonmov on 12/4/16.
 */

public class UserDeserializer extends JsonDeserializer<User> {
    @Override
    public User deserialize(JsonParser jsonParser,
                            DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        String username = node.has("username") ? node.get("username").asText() : null;
        String password = node.has("password") ? node.get("password").asText() : null;
        String email = node.has("email") ? node.get("email").asText() : null;

        String firstName =node.has("firstName") ? node.get("firstName").asText() : "";
        String lastName = node.has("lastName") ? node.get("lastName").asText() : "";
        String description = node.has("description") ? node.get("description").asText() : "";
        long id = node.has("id") ? node.get("id").asInt() : 0;
        Boolean gender = node.has("gender") ? node.get("gender").asBoolean() : null;

        Date birthday;
        try {
            String birthdayString = node.has("birthday") ? node.get("birthday").asText() : "";
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            birthday = dateFormat.parse(birthdayString);
        } catch (ParseException e) {
            birthday = new Date();
        }

        return new User(id, birthday, description,
                        email,  firstName,
                        gender, password, lastName,
                        username);
    }
}
