package movieAdvisor.manyToMany.followerToFollowed;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import movieAdvisor.user.User;

import java.io.IOException;

/**
 * Created by eaonmov on 12/28/16.
 */
public class FollowerToFollowedDeserializer extends JsonDeserializer<FollowerToFollowed> {
    @Override
    public FollowerToFollowed deserialize(JsonParser jsonParser,
                                          DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        FollowerToFollowed ftf = new FollowerToFollowed();
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        if (node.has("follower") || node.has("followed"))
            throw new IOException("Not enough fields");

        ftf.setFollower(new User(node.get("follower").asLong()));
        ftf.setFollowed(new User(node.get("followed").asLong()));

        return ftf;
    }
}
