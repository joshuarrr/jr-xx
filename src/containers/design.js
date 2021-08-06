import React from 'react'
import { Head } from 'react-static'
import { Router, Link } from "@reach/router"

// components
import ImgLoad from '../components/projects/code/imgLoad/'
import ScrollButton from '../components/scrollToTop/'

// routes
import Hilights from './design/hilights'
import Lumen from './design/lumen'
import Idealist from './design/idealist'

// styles
import '../styles/projects.css'
//


export default () => [
  <Head key="head">
    <title>joshuar(product design)</title>
  </Head>,

  <section key="design-projects" className="design projects">
    <section className="project-summary">
      <h1>/* Hilights */</h1>
      <p>Product design for a music collaboration app that facilitates conversations around specific sections of recordings.</p>
      <div className="project-cover">
        <Link href="./design/hilights" to="design/hilights">
          <ImgLoad
            url="jr-xix/hilights/cover.png"
            cloudinary
            ratio="511x289"
          />
        </Link>
      </div>
    </section>
    <Router>
      <Hilights path="hilights" />
      <Lumen path="lumen" />
      <Idealist path="idealist" />
    </Router>
    <section className="project-summary">
      <h1>/* Lumen Learning */</h1>
      <p>User research, usability testing, and UI wireframes for a LMS (Learning Management System) that provides open source textbooks.</p>
      <div className="project-cover">
        <Link href="./design/lumen" to="design/lumen">
          <ImgLoad
            url="jr-xix/lumen/cover.png"
            cloudinary
            ratio="900x564"
            className="rounded"
          />
        </Link>
      </div>
    </section>
    <section className="project-summary">
      <h1>/* Idealist */</h1>
      <p>UX design & front-end engineering for Idealist.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions.</p>
      <div className="project-cover">
        <Link href="./design/idealist" to="design/idealist">
          <ImgLoad
            url="jr-xix/idealist/cover.png"
            cloudinary
            ratio="900x646"
          />
        </Link>
      </div>
    </section>
  </section>,
  <ScrollButton
    key="scroll-button"
    scrollStepInPx="80"
    delayInMs="16.66"
  />
]
