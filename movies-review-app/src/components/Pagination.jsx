export default function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="flex justify-center gap-4 my-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">{currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-300 rounded-lg"
      >
        Next
      </button>
    </div>
  );
}
