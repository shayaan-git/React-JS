import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Kodr from "./pages/Kodr.jsx";
import Kodex from "./pages/Kodex.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          {/* Yahan pe '/' nahi diya notice? Kyuki nesting ho rahi */}
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="/courses/kodex" element={<Kodex />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
