import React from 'react'
import './About.css'
import {FaAward, FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p className='about__text'>
            Hello! I'm Folarin, a motivated, passionate, and creative 
            Software Engineer with a track record of creating distinctive 
            user experiences that encourage engagement.
          </p>

          <p className='about__text'>
            I enjoy using codes to solve problems and creating web-based applications.
            I create beautiful websites and online applications with pixel-perfect user interfaces.
          </p>

          <p className='about__text'>
            When I'm not coding, you can find me watching football, listening to music, 
            going to the cinema, traveling, or hanging out with friends and family.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About