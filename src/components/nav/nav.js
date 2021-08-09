import React from 'react'
import NavLink from '../navlink/'

// styles
import './nav.css'
//


export default () =>
  <nav className="nav">
    <NavLink className="nav-item" to="/">about</NavLink>
    <NavLink className="nav-item" to="/design">design</NavLink>
    <NavLink className="nav-item" to="/code">code</NavLink>
  </nav>

