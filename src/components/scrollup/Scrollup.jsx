import React, { useEffect } from "react";
import "./scrollup.css";
import Shery from "sheryjs";
const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if(this.scrollY >= 560) scrollUp.classList.add
    ("show-scroll")
    else scrollUp.classList.remove("show-scroll")
  });

  useEffect(()=>{
    Shery.makeMagnet(".magnet-target",{
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  })
  return (
    <a href="#" className="scrollup magnet-target">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
