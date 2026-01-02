import { Link } from "react-router-dom";
import { useState } from "react";
import { getTheme, setTheme } from "../utils/theme";

function Navbar() {
  const [theme, setThemeState] = useState(getTheme());

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return (
    <nav className="nav">
      <div className="logo">MovieNest</div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;





