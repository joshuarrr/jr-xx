import React from 'react'
import { Head } from 'react-static'

// components
import ImgLoad from '../components/projects/code/imgLoad/'

// styles
import'../styles/about.css'
//


export default () => [
  <Head key="head">
    <title>joshuar — about</title>
  </Head>,
  <section key="content" className="about content">
    <div className="profile-pic-wrapper">
    <ImgLoad
      url="jr-xix/joshua-richey"
      ratio='1x1'
      duration='1s'
      className="profile-pic rounded bordered"
      indicator
      cloudinary
    />
    </div>
    <section className="bio">
      <p>Joshua Richey is a product strategist, user experience designer, and front-end developer with > 14 years of experience conceiving, researching, designing, and building digital tools for human use. He currently helps Aclima build interfaces that visualize air pollution at a hyperlocal level.</p>
      <p>In a definitively non-cheesy way, Joshua is deeply motivated by change-making and world-saving. He previously led design at Idealist.org (an international jobs board for nonprofits), where he spearheaded human-centered design efforts, built a scalable design system, and rewrote the front end using htlm5, sass / postCSS, and react.</p>
      <p>Prior, he ran his own company, Cohesive Branding, where he led the design of brand, print, and interactive products for Pink Floyd, Skydance Entertainment, and the Grand Canyon (which he thinks is kinda neat).</p>
      <p>When not in front of his screen, he’s probably out walking around with his dog. When in front of the screen, he probably looks like this:</p>
      <div className="working-pic-wrapper">
        <ImgLoad
          url="jr-xix/working"
          ratio='1x1'
          duration='1s'
          className="rounded bordered"
          indicator
          cloudinary
        />
      </div>
    </section>
  </section>
]
