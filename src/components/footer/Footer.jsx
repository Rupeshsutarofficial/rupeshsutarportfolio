import React from "react";
import "./footer.css";

const Footer = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the width as needed

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Rupesh Sutar</h1>
        <ul className='footer__list'>
          <li>
            <a
              href='#about'
              className={`footer__link ${!isMobile ? "magnet-target" : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#portfolio'
              className={`footer__link ${!isMobile ? "magnet-target" : ""}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#testimonials'
              className={`footer__link ${!isMobile ? "magnet-target" : ""}`}
            >
              Testimonials
            </a>
          </li>
        </ul>
        <div className='footer__social'>
          <a
            href='https://www.instagram.com/mr.rupeshsutar/'
            className={`footer__social-link ${
              !isMobile ? "magnet-target" : ""
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-instagram'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/rupeshsutarofficial/'
            className={`footer__social-link ${
              !isMobile ? "magnet-target" : ""
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://github.com/Rupeshsutarofficial'
            className={`footer__social-link ${
              !isMobile ? "magnet-target" : ""
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-github'></i>
          </a>
          <a
            href='https://www.youtube.com/@Shubhfilmandedit'
            className={`footer__social-link ${
              !isMobile ? "magnet-target" : ""
            }`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='bx bxl-youtube'></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169; RupeshSutar. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
