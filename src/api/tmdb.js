const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchTMDB = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("TMDB fetch failed");
  return res.json();
};

export const getTrending = () =>
  fetchTMDB(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
export const getPopular = (page = 1) =>
  fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
    .then(res => res.json());

export const getTopRated = () =>
  fetchTMDB(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);

export const getUpcoming = () =>
  fetchTMDB(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  fetchTMDB(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

export const getMovieDetails = (id) =>
  fetchTMDB(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
  );


