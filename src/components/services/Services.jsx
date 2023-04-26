import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const UxUiServices = [
  {
    id: 1,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
]

const webServices = [
  {
    id: 1,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
]

const contentCreatorServices = [
  {
    id: 1,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    icon: <BiCheck />,
    service: "Lorem ipsum dolor sit amet consectetur.",
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
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
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
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          ))}
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          {contentCreatorServices.map((service) => (
            <ul className='service__list' key={service.id}>
              <li>
                <icon className="service__list-icon">
                  {service.icon}
                </icon>
                <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Services