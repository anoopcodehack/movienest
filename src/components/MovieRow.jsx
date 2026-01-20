import { memo } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [], favorites = [], onFavToggle }) {
  if (!movies.length) return null;

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>

      <div className="row-scroll">
        {movies.map((movie) => {
          const isFavorite = favorites.some(f => f.id === movie.id);

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
    </section>
  );
}

// Prevent useless re-renders when props don't change
export default memo(MovieRow);



