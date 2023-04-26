import React from 'react'
import './about.css'
import ME from '../../assets/JoePhoto2.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experince</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Hello World! I am an aspiring Front-End Developer. I grew up around computers at a young age,
            and I have always been a fan of digital art. This lead me to discover my love for Software
            Development. Being a quick learner, I adapt my enviornment well. I am constantly working on projects
            and expanding my knowledge, so I know when you hire me you will not be dissappointed in my skills. Throw
            me any problem or project and I'll exceed your expectations.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About