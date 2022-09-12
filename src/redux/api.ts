import axios from "axios";
import api from "../utils/api";

export const getPopularMovies = async (page: number) =>
  axios.get(api.endpoints.getPopularMoviesByPage(page));

export const getMovieDetails = async (id: string) =>
  axios.get(api.endpoints.getMovieById(id));
