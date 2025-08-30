import { useEffect, useState } from "react";
import { fetchGenres } from "../services/tmdbApi";

export default function FilterBar({ onFilter }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data.genres));
  }, []);

  const applyFilter = () => {
    onFilter({ genre: selectedGenre, year });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="border px-4 py-2 rounded-lg"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border px-4 py-2 rounded-lg"
      />

      <button onClick={applyFilter} className="!bg-green-600 text-white px-4 py-2 rounded-lg hover:!bg-red-400">
        Apply
      </button>
    </div>
  );
}
