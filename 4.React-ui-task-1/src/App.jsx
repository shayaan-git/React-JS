import React from "react";
import MainSection from "./components/mainSection";
import Nav from "./components/Nav";
import Section2 from "./components/Section2";
import AboutCards from "./components/AboutCards";
import Section3 from "./components/Section3";
import ServicesSection from "./components/ServicesSection";
const App = () => {
  return (
    <div>
      <Nav />
      <MainSection />
      <Section2 />
      <AboutCards />
      <Section3 />
      <ServicesSection/>
    </div>
  );
};

export default App;
