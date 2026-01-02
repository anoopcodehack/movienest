import MovieCard from "../components/MovieCard";

function Favorites({ favorites, onRemoveFavorite }) {
  return (
    <div className="favorites-page">
      <h2 className="favorites-title">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid">
          {favorites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFav={true}
              onFavToggle={() => onRemoveFavorite(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
