import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Marque from "./Marque";
import Skills from "./Skills";
import Achive from "./Achive";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Marque />
      <About />
      <Skills />
      <Achive />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
