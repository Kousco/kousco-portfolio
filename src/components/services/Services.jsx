import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const UxUiServices = [
  {
    id: 1,
    icon: <BiCheck />,
    service: "Designing Figma wireframes, and then prototypes.",
  },
  {
    id: 2,
    icon: <BiCheck />,
    service: "Using empathy tools to relate to the users emotions for a more authentic experience.",
  },
  {
    id: 3,
    icon: <BiCheck />,
    service: "Creating mood boards to design a theme for the app/webpage.",
  },
  {
    id: 4,
    icon: <BiCheck />,
    service: "Coding with accessibility in mind.",
  },
  {
    id: 5,
    icon: <BiCheck />,
    service: "Running usability tests.",
  },
]

const webServices = [
  {
    id: 1,
    icon: <BiCheck />,
    service: "Coding websites using HTML and CSS",
  },
  {
    id: 2,
    icon: <BiCheck />,
    service: "Creating apps using JavaScript and Jsx in React",
  },
  {
    id: 3,
    icon: <BiCheck />,
    service: "Coding with accessibility in mind.",
  },
  {
    id: 4,
    icon: <BiCheck />,
    service: "Writing unit tests, integration tests, and end to end tests",
  },
]

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI</h3>
          </div>

          {UxUiServices.map((service) => (
            <ul className='service__list' key={service.id}>
              <li>
                <icon className="service__list-icon">
                  {service.icon}
                </icon>
                <p>{service.service}</p>
              </li>
            </ul>
          ))}
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          {webServices.map((service) => (
            <ul className='service__list' key={service.id}>
              <li>
                <icon className="service__list-icon">
                  {service.icon}
                </icon>
                <p>{service.service}</p>
              </li>
            </ul>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Services