import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../models";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [] as Movie[],
    movie: {} as Movie,
  },
  reducers: {
    setMoviesList(state, action) {
      state.moviesList = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    getMoviesList(name) {
      return name;
    },
    getMovie(id) {
      return id;
    },
  },
});

export const { setMoviesList, setMovie, getMoviesList, getMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
