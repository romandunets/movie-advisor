package movieAdvisor.movie;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import movieAdvisor.genres.Genre;
import movieAdvisor.tag.Tag;

import java.io.IOException;

/**
 * Created by eaonmov on 12/18/16.
 */

public class MovieSerializer extends JsonSerializer<Movie> {

    @Override
    public void serialize(Movie movie,
                          JsonGenerator jsonGenerator,
                          SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", movie.getId());
        jsonGenerator.writeStringField("description", movie.getDescription());
        jsonGenerator.writeStringField("studio", movie.getStudio());
        jsonGenerator.writeStringField("coverImage", movie.getCoverImage());
        jsonGenerator.writeStringField("producer", movie.getProducer());
        jsonGenerator.writeStringField("title", movie.getTitle());
        jsonGenerator.writeNumberField("ageRestriction", movie.getAgeRestriction());
        jsonGenerator.writeNumberField("duration", movie.getDuration());
        jsonGenerator.writeNumberField("year", movie.getYear());
        if (movie.getRate() != null)
            jsonGenerator.writeNumberField("rating", movie.getRate());
        if (movie.getMatch() != null)
            jsonGenerator.writeNumberField("match", movie.getMatch());

        if (movie.getMovieGenres() != null) {
            jsonGenerator.writeArrayFieldStart("genres");
            for (int i = 0; i < movie.getMovieGenres().size(); i++) {
                Genre genre = (movie.getMovieGenres()).get(i).getGenre();
                jsonGenerator.writeStartObject();
                jsonGenerator.writeNumberField("id", genre.getId());
                jsonGenerator.writeStringField("name", genre.getName());
                jsonGenerator.writeStringField("description", genre.getDescription());
                jsonGenerator.writeEndObject();
            }
            jsonGenerator.writeEndArray();
        }

        if (movie.getMoviesTags() != null) {
            jsonGenerator.writeArrayFieldStart("tags");
            for (int i = 0; i < movie.getMoviesTags().size(); i++) {
                Tag tag = (movie.getMoviesTags()).get(i).getTag();
                jsonGenerator.writeStartObject();
                jsonGenerator.writeNumberField("id", tag.getId());
                jsonGenerator.writeStringField("name", tag.getName());
                jsonGenerator.writeStringField("description", tag.getDescription());
                jsonGenerator.writeEndObject();
            }
            jsonGenerator.writeEndArray();
        }

        jsonGenerator.writeEndObject();
    }
}
