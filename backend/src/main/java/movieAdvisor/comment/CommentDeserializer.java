package movieAdvisor.comment;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import movieAdvisor.movie.Movie;
import movieAdvisor.user.User;

import java.io.IOException;

/**
 * Created by eaonmov on 12/27/16.
 */
public class CommentDeserializer extends JsonDeserializer<Comment> {

    @Override
    public Comment deserialize(JsonParser jsonParser,
                               DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        Comment comment = new Comment();
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        if (node.has("id"))
            comment.setId(node.get("id").asLong());

        if (node.has("title"))
            comment.setTitle(node.get("title").asText());
        else throw new IOException("Title field not defined");

        if (node.has("content"))
            comment.setContent(node.get("content").asText());
        else throw new IOException("Content field not defined");

        if (node.has("user"))
            comment.setUser(new User(node.get("user").asLong()));
        else throw new IOException("User field not defined");

        if (node.has("movie"))
            comment.setMovie(new Movie(node.get("movie").asLong()));
        else throw new IOException("Movie field not defined");

        return comment;
    }
}
