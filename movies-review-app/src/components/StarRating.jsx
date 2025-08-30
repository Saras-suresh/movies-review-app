import { useState, useEffect } from "react";

export default function StarRating({ movieId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`rating-${movieId}`);
    if (saved !== null) { 
       setRating(parseInt(saved));
    } else {
        setRating(0);
    }
  }, [movieId]);

  const handleRating = (value) => {
    if(rating === value) {
    setRating(0);
    localStorage.removeItem(`rating-${movieId}`);
    } else {
        setRating(value);
        localStorage.setItem(`rating-${movieId}`, value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={(e) => {
            e.stopPropagation();
             handleRating(star)
          }}
          className={`cursor-pointer text-xl ${
            star <= rating ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
      {rating > 0 && (
          <span className="ml-2 text-sm">Your rating: {rating}/5</span>
        )}
    </div>
  );
}