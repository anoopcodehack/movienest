import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  
  const addFavorite = (movie) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  
  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(m => m.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              onAddFavorite={addFavorite}
              onRemoveFavorite={removeFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onRemoveFavorite={removeFavorite}
            />
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

