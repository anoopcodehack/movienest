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

  const [popularPage, setPopularPage] = useState(1);
  const [popularLoading, setPopularLoading] = useState(false);
  const [popularHasMore, setPopularHasMore] = useState(true);

  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const location = useLocation();

  // Initial fetch (only once)
  useEffect(() => {
    getTrending().then(d => setTrending(d.results || []));
    getTopRated().then(d => setTopRated(d.results || []));
    getUpcoming().then(d => setUpcoming(d.results || []));
    loadPopular();
    // eslint-disable-next-line
  }, []);

  // Reset search on route change
  useEffect(() => {
    setIsSearching(false);
    setQuery("");
    setSearchResults([]);
  }, [location.key]);

  // Infinite scroll for Popular
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        loadPopular();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popularPage, popularLoading]);

  const loadPopular = async () => {
    if (popularLoading || !popularHasMore) return;

    setPopularLoading(true);

    try {
      const d = await getPopular(popularPage);

      if (!d.results || d.results.length === 0) {
        setPopularHasMore(false);
      } else {
        setPopular(prev => [...prev, ...d.results]);
        setPopularPage(prev => prev + 1);
      }
    } catch (err) {
      console.error("Popular fetch error:", err);
    }

    setPopularLoading(false);
  };

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

          {popularLoading && (
            <p style={{ textAlign: "center", marginTop: 10 }}>
              Loading more movies...
            </p>
          )}

          {!popularHasMore && (
            <p style={{ textAlign: "center", marginTop: 10 }}>
              No more movies
            </p>
          )}

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
