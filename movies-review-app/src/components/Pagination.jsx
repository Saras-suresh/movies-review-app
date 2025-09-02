export default function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="flex justify-center gap-4 my-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-4 py-2 bg-gray-400 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg">{currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 text-gray-900 dark:text-gray-100 rounded-lg"
      >
        Next
      </button>
    </div>
  );
}
