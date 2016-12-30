package movieAdvisor.manyToMany.usersToMovies;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.io.IOException;

/**
 * Created by eaonmov on 12/27/16.
 */

public class UsersToMoviesDeserializer extends JsonDeserializer<UsersToMovies> {
    public UsersToMovies deserialize(JsonParser jsonParser,
                                     DeserializationContext deserializationContext) throws IOException, JsonProcessingException {

        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        if (!node.has("user") || !node.has("movie") || !node.has("rating")) {
            throw new IOException("Bad json format");
        }

        Long user_id = node.get("user").asLong();
        Long movie_id = node.get("movie").asLong();
        float rating = (float) node.get("rating").asDouble();
        try {
            return new UsersToMovies(user_id, movie_id, rating);
        } catch (Exception e) {
            return null;
        }
    }
}
