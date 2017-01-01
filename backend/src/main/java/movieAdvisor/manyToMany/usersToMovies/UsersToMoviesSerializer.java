package movieAdvisor.manyToMany.usersToMovies;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by eaonmov on 12/27/16.
 */
public class UsersToMoviesSerializer extends JsonSerializer<UsersToMovies> {
    public void serialize(UsersToMovies usersToMovies, JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeEndObject();
    }
}
