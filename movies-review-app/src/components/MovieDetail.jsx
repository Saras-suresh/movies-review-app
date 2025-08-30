export default function MovieDetail({ movie, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">❌</button>
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="mb-4 w-full h-96 object-cover rounded"
        />
        <p className="mb-2">{movie.overview}</p>
        <p><b>Release:</b> {movie.release_date}</p>
        <p><b>Rating:</b> ⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}
