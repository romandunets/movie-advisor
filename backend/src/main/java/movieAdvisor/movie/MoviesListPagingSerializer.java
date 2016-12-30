package movieAdvisor.movie;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

/**
 * Created by eaonmov on 12/29/16.
 */
public class MoviesListPagingSerializer extends JsonSerializer<MoviesListPaging> {
    @Override
    public void serialize(MoviesListPaging moviesListPaging, JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeObjectFieldStart("meta");
        jsonGenerator.writeNumberField("page", moviesListPaging.getPage());
        jsonGenerator.writeNumberField("perPage", moviesListPaging.getPerPage());
        jsonGenerator.writeNumberField("numOfPages", moviesListPaging.getNumOfPages());
        jsonGenerator.writeEndObject();

        jsonGenerator.writeArrayFieldStart("data");
        for (Movie movie : moviesListPaging.getMovieList()) {
            jsonGenerator.writeObject(movie);
        }
        jsonGenerator.writeEndArray();

        jsonGenerator.writeEndObject();

    }
}
