import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Shery from "sheryjs";
import LocomotiveScroll from "locomotive-scroll";



const isMobile = window.innerWidth <= 768;
const App = () => {

  useEffect(() => {
    // Run Shery.mouseFollower only if not mobile
    
    if (!isMobile) {
      Shery.mouseFollower({
        color: 'black',
      });
    }

    // Initialize LocomotiveScroll
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      // Other initialization tasks can go here
    })();
  }, []); // Empty dependency array means this effect runs only once

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;
