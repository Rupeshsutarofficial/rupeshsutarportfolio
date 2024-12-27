import React from "react";

const Social = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className='home__social'>
      <a
        href='https://www.instagram.com/mr.rupeshsutar/'
        className={`home__social-icon ${!isMobile ? "magnet-target" : ""}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-instagram-alt'></i>
      </a>
      <a
        href='https://www.linkedin.com/in/rupeshsutarofficial'
        className={`home__social-icon ${!isMobile ? "magnet-target" : ""}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-linkedin'></i>
      </a>
      <a
        href='https://github.com/Rupeshsutarofficial'
        className={`home__social-icon ${!isMobile ? "magnet-target" : ""}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-github'></i>
      </a>
      <a
        href='https://www.youtube.com/@Shubhfilmandedit'
        className={`home__social-icon ${!isMobile ? "magnet-target" : ""}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <i class='bx bxl-youtube'></i>
      </a>
    </div>
  );
};

export default Social;
