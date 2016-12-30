package movieAdvisor.manyToMany.movieImages;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import movieAdvisor.movie.Movie;

import java.io.IOException;

/**
 * Created by eaonmov on 12/28/16.
 */
public class MovieImagesDeserializer extends JsonDeserializer<MovieImages> {
    @Override
    public MovieImages deserialize(JsonParser jsonParser,
                                   DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        MovieImages movieImages = new MovieImages();
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        if (!node.has("name") || !node.has("type") || !node.has("link") || !node.has("movie"))
            throw new IOException("Not enough fields in json object");

        if (node.has("id"))
            movieImages.setId(node.get("id").asLong());
        movieImages.setName(node.get("name").asText());
        movieImages.setLink(node.get("link").asText());
        movieImages.setType(node.get("type").asText());
        movieImages.setMovie(new Movie(node.get("movie").asLong()));

        return movieImages;
    }
}
