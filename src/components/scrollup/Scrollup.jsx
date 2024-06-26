import React from "react";
import "./scrollup.css";
import Shery from "sheryjs";
const Scrollup = () => {
  const isMobile = window.innerWidth <= 768;
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if(this.scrollY >= 560) scrollUp.classList.add
    ("show-scroll")
    else scrollUp.classList.remove("show-scroll")
  });
  return (
    <a href="#" className={`scrollup ${!isMobile ? 'magnet-target' : ''}`}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
