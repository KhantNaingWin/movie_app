/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Home = () => {
  const dispatch = useDispatch();
  const getMovieData = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results));
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
