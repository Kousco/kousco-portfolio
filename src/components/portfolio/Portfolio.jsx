import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-image1.png'
import IMG2 from '../../assets/portfolio-image2.png'
import IMG3 from '../../assets/portfolio-image3.png'
import IMG4 from '../../assets/portfolio-image4.png'
import IMG5 from '../../assets/portfolio-image5.jpg'
import IMG6 from '../../assets/portfolio-image6.jpg'

const itemData = [
  {
    id: 1,
    image: IMG1,
    title: "Reserve A Table App",
    github:"https://github.com/Kousco/little-lemon-project",
    demo: "https://kousco.github.io/little-lemon-project/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Figma Wireframe/Prototype",
    github:"https://www.figma.com/file/yrbeZ4HWW31xpk3UuDcytY/Exercise-Wireframing-the-project-Wireframe?node-id=0-1&t=cq6BhZ78zRRc1l2e-0",
    demo: "https://www.figma.com/proto/yrbeZ4HWW31xpk3UuDcytY/Exercise-Wireframing-the-project-Wireframe?node-id=1-57",
  },
  {
    id: 3,
    image: IMG3,
    title: "Metaversus Concept",
    github:"https://github.com/Kousco/metaversus-concept",
    demo: "https://kousco.github.io/metaversus-concept/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TBC Church Website (Under Development...)",
    github:"https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project In Progress...",
    github:"https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project In Progress...",
    github:"https://github.com",
    demo: "https://github.com",
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {itemData.map((item) => (
          <article className='portfolio__item' key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt='' />
            </div>
            <h3>{item.title}</h3>
            <div className='portfolio__item-cta'>
              <a href={item.github} className='btn'>Github</a>
              <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio