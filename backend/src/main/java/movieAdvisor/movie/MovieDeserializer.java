package movieAdvisor.movie;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import movieAdvisor.genres.Genre;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by eaonmov on 12/18/16.
 */
public class MovieDeserializer extends JsonDeserializer<Movie> {
    @Override
    public Movie deserialize(JsonParser jsonParser,
                            DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        Movie movie = new Movie();
        if (node.has("id"))
            movie.setId(node.get("id").asLong());
        if (node.has("title"))
            movie.setTitle(node.get("title").asText());
        if (node.has("year"))
            movie.setYear(node.get("year").asInt());
        if (node.has("studio"))
            movie.setStudio(node.get("studio").asText());
        if (node.has("coverImage"))
            movie.setCoverImage(node.get("coverImage").asText());
        if (node.has("description"))
            movie.setDescription(node.get("description").asText());
        if (node.has("ageRestriction"))
            movie.setAgeRestriction(node.get("ageRestriction").asInt());
        if (node.has("duration"))
            movie.setDuration(node.get("duration").asInt());
        if (node.has("producer"))
            movie.setProducer(node.get("producer").asText());


        if (node.has("genres")) {
            Set<Integer> genres = new HashSet<Integer>(0);
            String genresIds[] = node.get("genres").asText().split(",");
            for (String genreId : genresIds)
                genres.add(Integer.parseInt(genreId));
            movie.setGenres(genres);
        }
        if (node.has("tags")) {
            Set<Integer> tags = new HashSet<Integer>(0);
            String tagIds[] = node.get("tags").asText().split(",");
            for (String tagId : tagIds)
                tags.add(Integer.parseInt(tagId));
            movie.setTags(tags);
        }

        return movie;
    }

}
