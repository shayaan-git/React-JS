import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen bg-black text-white font-semibold text-5xl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
);
 