import React from 'react'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Otherskills from './Otherskills'
import Tools from './Tools'

const Skills = () => {
  return (
    <section className='skills section' id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level </span>
        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
            <Otherskills/>
            <Tools/>
        </div>

    </section>
  )
}

export default Skills