import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getPopularMovies } from "./api";
import { getMoviesList, setMoviesList } from "./feature/movieSlice";

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

export const moviesSagas = [fork(onLoadMovies)];
