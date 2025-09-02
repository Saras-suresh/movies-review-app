import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import { fetchGenres } from "../services/tmdbApi";

export default function MovieCard({ movie, onClick }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const data = await fetchGenres();
      setGenres(data.genres || []);
    };
    getGenres();
  }, []);

  // Map movie.genre_ids to genre names
  const movieGenres = movie.genre_ids
    ? movie.genre_ids
        .map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
    : [];

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
      onClick={() => onClick(movie)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg truncate text-grey-900 dark:text-grey-100">{movie.title}</h3>
        <p className="flex items-center justify-between text-md font-semibold text-gray-700 dark:text-gray-300">{movie.release_date?.split("-")[0]}
          </p>
        {movieGenres.length > 0 && (
          <p className="text-md font-semibold text-gray-700 dark:text-gray-400">{movieGenres.join(", ")}</p>
        )}

        <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">⭐ TMDB: {movie.vote_average.toFixed(1)}</p>
        <StarRating movieId={movie.id} />
      </div>
    </div>
    
  );
}
