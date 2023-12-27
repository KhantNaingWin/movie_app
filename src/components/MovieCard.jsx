import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/details/${movie.id}`}>
        <Card
          className="max-w-sm h-100"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.overview.slice(0, 150)}
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
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
