import React, { useState } from "react";
import "./services.css";
const Services = () => {
  const isMobile = window.innerWidth <= 768;
  const [toggleState, settoggleState] = useState(0);
  const toggleTab = (index) => {
    settoggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-code-alt services__icon"></i>
            <h3 className="services__title">
            Full Stack Developer
            </h3>
          </div>
          <span className={`services__button ${!isMobile ? 'magnet-target' : ''}`} onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close magnet-target"
              ></i>
              <h3 className="services__modal-title">Full Stack Developer</h3>
              <p className="services__modal-description">
              Building on a Strong Foundation: Crafting Quality Solutions Through Fresh Insights and 8 Months of Internship Experience
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Developing user interfaces
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Crafting Fully responsive website
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Brand positioning for companies
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Designing and creating product mockups.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="bx bxs-video services__icon"></i>
            <h3 className="services__title">
            Creative Video Editor
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className={`services__button ${!isMobile ? 'magnet-target' : ''}`}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close magnet-target"
              ></i>
              <h3 className="services__modal-title">Creative Video Editor</h3>
              <p className="services__modal-description">
              As a versatile video editor adept at creating engaging content for diverse platforms, I bring a fresh perspective and a wealth of skills to every project.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  YouTube Video Editing.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Long-Form & Short-Form Content.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Reel Editing.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Cinematic Wedding Video Editing
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="bx bxs-landscape services__icon"></i>
            <h3 className="services__title">
            Graphics Designer
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className={`services__button ${!isMobile ? 'magnet-target' : ''}`}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close magnet-target"
              ></i>
              <h3 className="services__modal-title">Graphics Designer</h3>
              <p className="services__modal-description">
              I specialize in creating attention-grabbing YouTube thumbnails with a unique touch.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Eye-Catching Thumbnails.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Consistent Branding.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Telling Stories Visually.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Engaging Viewers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="bx bxl-youtube services__icon"></i>
            <h3 className="services__title youtube-service">
           
            </h3>
          </div>
          <span onClick={() => toggleTab(4)} className={`services__button ${!isMobile ? 'magnet-target' : ''}`}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close magnet-target"
              ></i>
              <h3 className="services__modal-title">Youtube Account Manager</h3>
              <p className="services__modal-description">
              As your YouTube account manager, I boost your channel's success with top-notch SEO, captivating video editing, and click-worthy thumbnail designs. Elevate your YouTube presence and transform your channel into a hub for engaging content and increased visibility.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Stay updated on YouTube's video display changes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Check analytics often to know what viewers enjoy.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Modify video details using analytics findings.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   Enhance video ranking with SEO, editing, and eye-catching thumbnails.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
