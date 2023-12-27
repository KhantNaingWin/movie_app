import { ActionType } from "../../action/action-type";

const intitalState = {
  movies: [],
  movie: {},
};

export const movieReducer = (state = intitalState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_MOVIE:
      return { ...intitalState, movies: payload };
    case ActionType.SELECT_MOVIE:
      return { ...intitalState, movie: payload };
    default:
      return state;
  }
};
