import axios from "axios";
import api from "../utils/api";

export const getPopularMovies = async () =>
  axios.get(api.endpoints.getPopularMovies);

export const getMovieDetails = async (id: string) =>
  axios.get(api.endpoints.getMovieById(id));
