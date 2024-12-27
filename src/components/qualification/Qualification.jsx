import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, settoggleState] = useState(1);
  const toggleTab = (index) => {
    settoggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs '>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex "
                : "qualification__button button--flex "
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon '></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex "
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>
        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Full Stack Development</h3>
                <span className='qualification__subtitle'>
                  Profound Edutech Nashik
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2023-2024
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Degree In Mechanical</h3>
                <span className='qualification__subtitle'>Nashik - SPPU</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - 2023
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Diploma in Mechanical</h3>
                <span className='qualification__subtitle'>Nashik - MSBTE</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2019 - 2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Front end Developer</h3>
                <span className='qualification__subtitle'>
                  Think Digital (Nashik)
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2024-Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Full Stack Dev Intern</h3>
                <span className='qualification__subtitle'>
                  Profound Edutech Nashik
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2023-2024
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Video Editor</h3>
                <span className='qualification__subtitle'>freelancer</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2023-Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Graphics Designer</h3>
                <span className='qualification__subtitle'>freelancer</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2022-Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
