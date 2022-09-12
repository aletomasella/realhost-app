import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovieDetails, getPopularMovies } from "./api";
import {
  getMovie,
  getMoviesList,
  setMoviesList,
  setMovie,
} from "./feature/movieSlice";

// FILL THE MOVIES ARRAY WITH THE DATA FROM THE API

function* onLoadMoviesAsync(): any {
  try {
    const response = yield call(getPopularMovies);
    if (response.status === 200) {
      yield put(setMoviesList({ ...response.data }));
    }
  } catch (error) {
    console.error(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMoviesList.type, onLoadMoviesAsync);
}

// GET THE DETAILS FOR A SINGLE MOVIE

function* onLoadMovieAsync({ payload }: { payload: string }): any {
  try {
    const movieID = payload;
    const response = yield call(getMovieDetails, movieID);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.error(error);
  }
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type as any, onLoadMovieAsync);
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
