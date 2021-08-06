import React from 'react'
import NavLink from '../navlink/'

// styles
import './nav.css'
//


export default () =>
  <nav className="nav">
    <NavLink className="nav-item" to="/">design</NavLink>
    <NavLink className="nav-item" to="/code">code</NavLink>
    <NavLink className="nav-item" to="/about">about</NavLink>
  </nav>

