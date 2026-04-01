import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product";
import Navbar from "./components/Navbar";
import RandomAbout from "./components/pages/RandomAbout";
import AnyCourse from "./components/pages/AnyCourse";
import Courses from "./components/pages/Courses";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/about/:id" element={<RandomAbout />} />

        <Route path="/courses/:courseId" element={<AnyCourse />} />
      </Routes>
    </div>
  );
};

export default App;
