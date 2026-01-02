
import MovieCard from "./MovieCard";

function MovieRow({ title, movies, favorites, onFavToggle }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-scroll">
        {movies.map((movie) => {
          const isFavorite = favorites.some((f) => f.id === movie.id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFav={isFavorite}
              onFavToggle={() => onFavToggle(movie)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieRow;



