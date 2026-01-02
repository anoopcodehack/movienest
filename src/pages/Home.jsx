import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getTrending,
  getPopular,
  getTopRated,
  getUpcoming,
  searchMovies
} from "../api/tmdb";
import MovieRow from "../components/MovieRow";
import MovieSlider from "../components/MovieSlider";


function Home({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getTrending().then(d => setTrending(d.results || []));
    getPopular().then(d => setPopular(d.results || []));
    getTopRated().then(d => setTopRated(d.results || []));
    getUpcoming().then(d => setUpcoming(d.results || []));
  }, []);
useEffect(() => {
  setIsSearching(false);
  setQuery("");
  setSearchResults([]);
}, [location.key]);

  

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      const d = await searchMovies(query);
      console.log("SEARCH RESULTS 👉", d);
      setSearchResults(d.results || []);
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
    }
  };

  const handleFavToggle = (movie) => {
    const isFav = favorites.some(f => f.id === movie.id);
    isFav ? onRemoveFavorite(movie.id) : onAddFavorite(movie);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="search"
          placeholder="Search movies..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>

      {isSearching ? (
        <MovieRow
          title={`Search Results for "${query}"`}
          movies={searchResults}
          favorites={favorites}
          onFavToggle={handleFavToggle}
        />
      ) : (
        <>
          <MovieSlider
  title="Trending"
  movies={trending}
  favorites={favorites}
  onFavToggle={handleFavToggle}
/>

          <MovieRow
            title="Popular"
            movies={popular}
            favorites={favorites}
            onFavToggle={handleFavToggle}
          />
          <MovieRow
            title="Top Rated"
            movies={topRated}
            favorites={favorites}
            onFavToggle={handleFavToggle}
          />
          <MovieRow
            title="Upcoming"
            movies={upcoming}
            favorites={favorites}
            onFavToggle={handleFavToggle}
          />
        </>
      )}
    </>
  );
}

export default Home;
