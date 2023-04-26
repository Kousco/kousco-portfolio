import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaFacebookSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/joseph-kousoulos-a814b8247/' target="_blank">
            <BsLinkedin />
        </a>
        <a href='https://github.com/Kousco' target="_blank">
          <FaGithub />
        </a>
        <a href='https://www.facebook.com/joe.kousoulos/' target="_blank">
          <FaFacebookSquare />
        </a>
    </div>
  )
}

export default HeaderSocials