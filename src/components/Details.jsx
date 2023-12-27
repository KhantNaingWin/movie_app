/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectMovie, selectMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    // console.log(res.data);
    dispatch(selectMovie(res.data));
  };

  let movie = useSelector((state) => state.movies.movie);

  useEffect(() => {
    if (movie) {
      movieDetails();
    }
    return () => dispatch(removeSelectMovie({}));
  }, []);

  return (
    <div>
      {JSON.stringify(movie) == {} ? (
        <div className=" d-flex justify-content-center align-items-center">
          <Spinner
            color="purple"
            aria-label="Purple spinner Large spinner example"
            size="lg"
          />
        </div>
      ) : (
        <div>
          <div className="m-5 text-center">
            <Link to="/">
              <button type="button" className="btn btn-outline-dark">
                <i className="fa-solid fa-circle-arrow-left mx-1"></i>Back
              </button>
            </Link>
          </div>
          <Card
            className="max-w-sm mx-auto my-auto"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.original_title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
              <span className="bg-dark text-white rounded-xl p-3">
                <i className=" me-2 fa-solid fa-star"></i>
                {movie.vote_average}
              </span>
              <span className="ms-3 bg-dark text-white rounded-xl p-3">
                <i className=" me-2 fa-solid fa-calendar-days"></i>
                {movie.release_date}
              </span>
            </div>
            <div className="rounded-xl p-3 bg-black text-white w-50 d-flex justify-content-center">
              <i class="fa-solid fa-users me-2"></i>
              {movie.vote_count}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Details;
