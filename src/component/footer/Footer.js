import React from 'react'
import './Footer.css'
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id='footer'>
      <a href="#home" rel="noreferrer" className="footer__logo">FOLARIN</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><AiFillLinkedin/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{year} FOLARIN. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer