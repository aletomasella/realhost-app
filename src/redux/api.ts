import axios from "axios";
import api from "../utils/api";

export const getPopularMovies = async () =>
  axios.get(api.endpoints.getPopularMovies);
