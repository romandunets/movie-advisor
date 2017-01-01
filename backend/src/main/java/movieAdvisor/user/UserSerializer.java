package movieAdvisor.user;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by eaonmov on 12/4/16.
 */
public class UserSerializer extends JsonSerializer<User> {
    @Override
    public void serialize(User user,
                          JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeNumberField("id", user.getId());
        jsonGenerator.writeStringField("username", user.getUsername());
        jsonGenerator.writeStringField("email", user.getEmail());
        jsonGenerator.writeStringField("firstName", user.getFirstName());
        jsonGenerator.writeStringField("secondName", user.getSecondName());
        jsonGenerator.writeStringField("description", user.getDescription());
        if (user.getBirthday() != null)
            jsonGenerator.writeStringField("birthday", user.getBirthday().toString());
        if (user.getGender() != null)
            jsonGenerator.writeBooleanField("gender", user.getGender());
        jsonGenerator.writeObjectField("role", user.getRole());

        jsonGenerator.writeEndObject();
    }
}
