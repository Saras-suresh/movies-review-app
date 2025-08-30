const API_KEY = "40705872ededcc210f5f60baa852e8fc"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (page = 1, query = "", genre = "", year = "") => {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
if (query) {
  url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ta&page=${page}`;
  if (genre) url += `&with_genres=${genre}`;
  if (year) url += `&primary_release_year=${year}`;
} else {
  url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;
  if (genre) url += `&with_genres=${genre}`;
  if (year) url += `&primary_release_year=${year}`;
}
  const res = await fetch(url);
  return res.json();
};

export const fetchMovieDetail = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
  return res.json();
};

export const fetchGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return res.json();
};
