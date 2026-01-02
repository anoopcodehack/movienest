export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const saveFavorites = (favorites) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));
