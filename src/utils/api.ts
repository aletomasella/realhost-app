const apiKey = import.meta.env.VITE_API_KEY;

const getMovieById = (id: string): string =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es&page=1`;

const getPopularMoviesByPage = (page: number = 1): string =>
  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=${page}`;

const api = {
  endpoints: {
    baseURL: "https://api.themoviedb.org/3/movie",
    getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`,
    getMovieById,
    getPopularMoviesByPage,
  },
};

export default api;
