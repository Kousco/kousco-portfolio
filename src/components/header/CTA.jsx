import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primaty'>Let's Talk</a>
    </div>
  )
}

export default CTA