import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  getMovieDetails(id).then(data => {
    console.log("MOVIE DATA 👉", data);
    setMovie(data);
  });
}, [id]);

  if (!movie) return <p>Loading...</p>;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="details">
      <img
  src={poster}
  alt={movie.title}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
  }}
/>


      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p><strong>Runtime:</strong> {movie.runtime} mins</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
        <p>
          <strong>Actors:</strong>{" "}
          {movie.credits?.cast?.slice(0, 5).map(a => a.name).join(", ") || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;




