package movieAdvisor.tag;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by eaonmov on 12/27/16.
 */
public class TagSerializer extends JsonSerializer<Tag> {
    @Override
    public void serialize(Tag tag, JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", tag.getId());
        jsonGenerator.writeStringField("name", tag.getName());
        jsonGenerator.writeStringField("description", tag.getDescription());
        jsonGenerator.writeEndObject();
    }
}
