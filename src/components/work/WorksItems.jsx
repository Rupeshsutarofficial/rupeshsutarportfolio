import React, { useEffect } from "react";
import Shery from "sheryjs";

const WorksItems = ({ item }) => {
  useEffect(()=>{
    Shery.makeMagnet(".magnet-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  })
  return (
    <div className="work__card" key={item.id}>
      <h3 className="work__title">{item.title}</h3>
      <img src={item.image} alt="" className="work__img" />
      <div className="container_link">
        {item.category === "Web" && (
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="work__button magnet-target"
          >
            <i className="bx bxl-github work__button-icon2"></i>Github Code
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}

        {item.category === "Figma" && (
          <a
            href={item.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="work__button magnet-target"
          >
            <i className="bx bxl-figma work__button-icon2"></i>Figma File
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}

        <a
          href={item.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button magnet-target"
        >
          Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
