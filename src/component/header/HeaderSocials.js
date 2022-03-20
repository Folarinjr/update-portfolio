import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BsGithub, BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin style={{color:"var(--color-primary)"}}/></a>
        <a href="https://github.com/Folarinjr" target="_blank" rel="noopener noreferrer"><BsGithub style={{color:"var(--color-primary)"}}/></a>
        <a href="https://instagram.com/graphicz_gallery" target="_blank" rel="noopener noreferrer"><BsInstagram style={{color:"var(--color-primary)"}}/></a>
        <a href="mailto:folarinjunior2@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineMail style={{color:"var(--color-primary)"}}/></a>
        <a href="https://twitter.com/Folarin62952071" target="_blank" rel="noopener noreferrer"><BsTwitter style={{color:"var(--color-primary)"}}/></a>
    </div>
  )
}

export default HeaderSocials