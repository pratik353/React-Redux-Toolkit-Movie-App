import React from "react";
import { useSelector } from "react-redux";

import "./movieList.scss";
import { getMovies } from "../../features/movies/movieSlice";
import { getShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
  const movies = useSelector(getMovies);
  const shows = useSelector(getShows);
  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.err}</h3>
      </div>
    );

  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.err}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieList;
