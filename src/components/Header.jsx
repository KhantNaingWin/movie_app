import React, { useRef } from "react";

import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  const dispatch = useDispatch();

  const movieName = useRef("");

  const searchMovieName = async () => {
    if (movieName !== "") {
      const res = await api.get(
        `/search/movie?query=${movieName.current.value}&&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Movie Channel
            </span>
          </Link>
        </Navbar.Brand>
        <div className="">
          <form className="d-flex">
            <TextInput placeholder="Search" ref={movieName} />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => searchMovieName()}
            >
              Search
            </button>
          </form>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
