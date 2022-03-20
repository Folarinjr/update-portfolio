import React from 'react'
import './Header.css'
import Cta from './Cta'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Junior Folarin</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <Cta />

        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header