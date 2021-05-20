import React from 'react'
import './header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h2 className="header__text">Weather</h2>
      <h2 className="header__text header__text_right">forecast</h2>
    </header>
  )
}

export default Header
