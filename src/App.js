import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Hero/Home";
import Resume from "./Components/Resume/Resume";
import Program from "./Components/Program/Program";
import Activities from "./Components/Testimonial/Activities";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Resume />
      <Program />
      <Activities />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
