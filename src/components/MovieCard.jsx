import { Link } from "react-router-dom";

function MovieCard({ movie, isFav, onFavToggle }) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const year = movie.release_date?.slice(0, 4) || "N/A";

  const handleFavClick = () => {
    onFavToggle(movie);
  };

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.title} />

      <div className="overlay">
        <h4>{movie.title}</h4>
        <p>
          ⭐ {movie.vote_average || "N/A"} | {year}
        </p>

        <div className="actions">
          <Link to={`/movie/${movie.id}`} className="btn play">
            ▶ View
          </Link>

          <button
            className={`btn ${isFav ? "remove" : "add"}`}
            onClick={handleFavClick}
          >
            {isFav ? "✖ Remove" : "＋ My List"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;









