import { useEffect, useState } from "react";
import { fetchMovies } from "../services/tmdbApi";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import FilterBar from "../components/FilterBar";
import MovieDetail from "../components/MovieDetail";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ genre: "", year: "" });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(page, query, filters.genre, filters.year);
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    };
    getMovies();
  }, [page, query, filters]);

  return (
    <div className="min-h-screen w-full px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col">
    
      <div className="flex flex-col items-center mt-6">
        <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
        <FilterBar onFilter={(f) => { setFilters(f); setPage(1); }} />
      </div>

      <div className="flex-1 mt-6 w-full">
        {movies.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500 dark:text-gray-300 text-lg">No movies found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
            ))}
          </div>
        )}
      </div>

      {movies.length > 0 && (
        <div className="mt-6 flex justify-center w-full">
          <Pagination currentPage={page} onPageChange={setPage} />
        </div>
      )}

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}
