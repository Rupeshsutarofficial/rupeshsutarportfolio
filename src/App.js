import React, { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Run Shery.mouseFollower only if not loading
    if (!isLoading && !isMobile) {
      Shery.mouseFollower({
        color: 'black',
      });
    }
  }, [isLoading]); // Re-run effect when isLoading changes

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
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
