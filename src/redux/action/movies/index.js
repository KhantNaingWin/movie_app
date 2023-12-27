import { ActionType } from "../action-type"


 export const fetchMovies=(movies)=>{
    return {
        type : ActionType.FETCH_MOVIE,
        payload: movies
    }
}
export const selectMovie = (movie)=>{
    return {
        type : ActionType.SELECT_MOVIE,
        payload: movie
    }
}
export const removeSelectMovie = (movie)=>{
    return {
        type : ActionType.REMOVE_SELECT_MOVIE,
        payload: movie
    }
}