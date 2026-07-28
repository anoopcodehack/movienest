# 🎬 MovieNest

> A full-featured React movie discovery app — trending, search, favorites, and rich movie
> details, all built on the TMDB API and styled with a custom brutalist design system.

🔗 **Live Site:** [movienest.vercel.app](https://movienest-git-master-anoop-as-projects.vercel.app/) &nbsp;|&nbsp;
💻 **Source Code:** [github.com/anoopcodehack/movienest](https://github.com/anoopcodehack/movienest)

---

## 🙋 About the Project

MovieNest started as a way to learn how a real React project comes together — from
structuring components to shipping a live, usable product. It's grown into a fully
API-driven movie browser with search, infinite scroll, a favorites system, and detailed
movie pages with cast, trailers, and recommendations.

The focus was on:
- Building a **real data layer** on top of a public REST API (TMDB)
- Writing **reusable, composable components**
- Handling **real-world UI states** — loading, empty, and error states
- Making layouts **responsive** across screen sizes
- **Deploying** a production build to Vercel

---
## Mockups
<img width="1877" height="850" alt="image" src="https://github.com/user-attachments/assets/761e7dcc-138c-4efa-acef-016274cac703" />

--
## ✨ Features

- 🔥 **Trending, Popular, Top Rated & Upcoming** movie rows on the home page
- ♾️ **Infinite scroll** pagination on the Popular row
- 🔍 **Live search** across TMDB's movie catalog
- ❤️ **Favorites** — add/remove movies, persisted across the session
- 🎬 **Movie details page** with:
  - Cast grid with photos and character names
  - Embedded YouTube trailer (modal player)
  - Genre tags and a styled rating badge
  - "Similar Movies" recommendations
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

| Technology       | Usage                          |
| ---------------- | ------------------------------- |
| React (CRA)       | UI framework                    |
| React Router      | Client-side routing             |
| TMDB API          | Movie data, cast, videos        |
| JavaScript ES6+   | App logic                       |
| HTML & CSS        | Markup & custom design system   |
| Vercel            | Deployment                      |

---

## 📂 Project Structure

```
src/
├── api/            # TMDB API layer
│   └── tmdb.js
├── components/     # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── MovieCard.jsx
│   ├── MovieRow.jsx
│   └── MovieSlider.jsx
├── pages/          # Page-level views
│   ├── Home.jsx
│   ├── Favorites.jsx
│   └── MovieDetails.jsx
├── utils/          # Helper functions
├── App.js          # Root component
├── App.css         # Global styles / design system
└── index.js        # Entry point
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/anoopcodehack/movienest.git

# 2. Install dependencies
npm install

# 3. Add your TMDB API key
# Create a .env file in the root:
# REACT_APP_TMDB_API_KEY=your_key_here

# 4. Start the app
npm start
```
> App runs at `http://localhost:3000`

> Get a free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

---

## 🔮 What's Next

- [ ] Genre-based browsing and filtering
- [ ] Sync favorites to a backend (MongoDB + JWT auth)
- [ ] Skeleton loading states
- [ ] Unit tests with React Testing Library
- [ ] PWA support for offline access

---

## 👤 Author

**Anoop A**
[GitHub](https://github.com/anoopcodehack) · [LinkedIn](https://linkedin.com/in/anoop-a-95b7b3331)
