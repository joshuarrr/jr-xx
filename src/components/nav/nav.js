import React from 'react'
import NavLink from '../navlink/'

// styles
import './nav.css'


export const scrollTop = () => {
  window.scrollTo(0, 0);
}

export default () =>
  <nav className="nav">
    <NavLink className="nav-item" to="/" onClick={() => scrollTop()}>about</NavLink>
    <NavLink className="nav-item" to="/design" onClick={() => scrollTop()}>design</NavLink>
    <NavLink className="nav-item" to="/code" onClick={() => scrollTop()}>code</NavLink>
  </nav>

