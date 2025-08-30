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
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
      onClick={() => onClick(movie)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg truncate">{movie.title}</h3>
        <p className="flex items-center justify-between text-sm text-red-600">{movie.release_date?.split("-")[0]}
          </p>
        {movieGenres.length > 0 && (
          <p className="text-sm text-green-600">{movieGenres.join(", ")}</p>
        )}

        <p className="text-yellow-600 mb-2">⭐ TMDB: {movie.vote_average.toFixed(1)}</p>
        <StarRating movieId={movie.id} />
      </div>
    </div>
    
  );
}
