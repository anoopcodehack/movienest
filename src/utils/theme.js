export const getTheme = () => {
  return localStorage.getItem("theme") || "dark";
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};
