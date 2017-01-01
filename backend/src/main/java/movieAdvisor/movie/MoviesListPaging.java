package movieAdvisor.movie;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;
import java.util.List;

/**
 * Created by eaonmov on 12/28/16.
 */
@JsonSerialize(using = MoviesListPagingSerializer.class)
public class MoviesListPaging implements Serializable {
    private Integer perPage;
    private Integer page;
    private Integer numOfPages;
    private List<Movie> movieList;

    public MoviesListPaging(Integer perPage, Integer page, Integer numOfPages, List<Movie> movieList) {
        this.perPage = perPage;
        this.page = page;
        this.numOfPages = numOfPages;
        this.movieList = movieList;
    }

    public Integer getPerPage() {
        return perPage;
    }
    public void setPerPage(Integer perPage) {
        this.perPage = perPage;
    }

    public Integer getPage() {
        return page;
    }
    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getNumOfPages() {
        return numOfPages;
    }
    public void setNumOfPages(Integer numOfPages) {
        this.numOfPages = numOfPages;
    }

    public List<Movie> getMovieList() {
        return movieList;
    }
    public void setMovieList(List<Movie> movieList) {
        this.movieList = movieList;
    }
}
