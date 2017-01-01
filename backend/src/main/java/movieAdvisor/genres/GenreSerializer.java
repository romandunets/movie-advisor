package movieAdvisor.genres;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by eaonmov on 12/26/16.
 */
public class GenreSerializer extends JsonSerializer<Genre> {

    public void serialize(Genre genre, JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", genre.getId());
        jsonGenerator.writeStringField("name", genre.getName());
        jsonGenerator.writeStringField("description", genre.getDescription());
        jsonGenerator.writeEndObject();
    }
}
