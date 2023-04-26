import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const frontendExperience = [
  {
    id: 1,
    title: "HTML",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
  {
    id: 2,
    title: "CSS",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
  {
    id: 3,
    title: "JavaScript",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
  {
    id: 4,
    title: "Bootstrap",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
  {
    id: 5,
    title: "Tailwind",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
  {
    id: 6,
    title: "React",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
]

const backendExperience = [
  {
    id: 1,
    title: "Node.js",
    level: "Basic",
    icon: <BsPatchCheckFill />
  },
  {
    id: 2,
    title: "Python",
    level: "Basic",
    icon: <BsPatchCheckFill />
  },
  {
    id: 3,
    title: "Git",
    level: "Experienced",
    icon: <BsPatchCheckFill />
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperience.map((exp) => (
              <article className='experience__details' key={exp.id}>
                <icon className="experience__details-icon">
                  {exp.icon}
                </icon>
                <div>
                  <h4>{exp.title}</h4>
                  <small className='text-light'>{exp.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendExperience.map((exp) => (
              <article className='experience__details' key={exp.id}>
                <icon className="experience__details-icon">
                  {exp.icon}
                </icon>
                <div>
                  <h4>{exp.title}</h4>
                  <small className='text-light'>{exp.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience