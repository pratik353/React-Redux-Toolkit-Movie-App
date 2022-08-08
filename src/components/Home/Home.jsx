// import axios from "axios";
import React, { useEffect } from "react";

import "./home.scss";
import MovieList from "../MovieListing/MovieList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch])

  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  );
};

export default Home;
