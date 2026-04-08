import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PostContext from "./context/PostContext.jsx";

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen bg-black text-white font-semibold">
    <PostContext>
      <App />
    </PostContext>
  </div>,
);
