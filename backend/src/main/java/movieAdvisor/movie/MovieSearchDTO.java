package movieAdvisor.movie;

import java.util.List;

/**
 * Created by eaonmov on 12/11/16.
 */
public class MovieSearchDTO {
    final Integer pageNumber;
    final Integer moviesPerPage;
    final Integer duration;
    final Integer year;
    final Integer genre_id;
    final List<String> sortBy;
    final String orderType;
    final String description;
    final String title;
    final String freeSearch;
    final Long userId;

    public MovieSearchDTO(Integer pageNumber, Integer moviesPerPage,
                          Integer duration, Integer year,
                          Integer genre_id, List<String> sortBy,
                          String orderType, String description, String title,
                          String freeSearch, Long userId) {
        this.pageNumber = pageNumber;
        this.moviesPerPage = moviesPerPage;
        this.duration = duration;
        this.year = year;
        this.genre_id = genre_id;
        this.sortBy = sortBy;
        this.orderType = orderType;
        this.description = description;
        this.title = title;
        this.freeSearch = freeSearch;
        this.userId = userId;
    }
}
