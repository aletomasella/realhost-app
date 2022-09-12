const apiKey = import.meta.env.VITE_API_KEY;

const api = {
  endpoints: {
    baseURL: "https://api.themoviedb.org/3/movie",
    getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`,
  },
};

export default api;
