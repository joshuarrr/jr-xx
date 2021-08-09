import React from 'react'
import { Head } from 'react-static'
import { Link } from '@reach/router'

// components
import ImgLoad from '../components/projects/code/imgLoad/'

// styles
import'../styles/stories.css'
//


export default () => [
  <Head key="head">
    <title>joshuar — stories</title>
  </Head>,
  <section key="content" className="story content">
    <h1>Stories</h1>
    <ul>
      <li>As We Come So We Go</li>
      <li><Link to="stories/aila">Aila, The Winged Unicorn</Link></li>
    </ul>
  </section>
]
