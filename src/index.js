import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { getTheme, setTheme } from "./utils/theme";

setTheme(getTheme());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



