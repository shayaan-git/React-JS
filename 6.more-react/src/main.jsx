import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Cards from "./components/cards.jsx";
import Button from "./components/Button.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Cards />
    <Button />
  </div>,
);
