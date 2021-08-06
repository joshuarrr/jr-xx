import React from 'react'
import { Head } from 'react-static'

// components
import ImgLoad from '../components/projects/code/imgLoad/'

// styles
import'../styles/about.css'
//


export default () => [
  <Head key="head">
    <title>joshuar(about)</title>
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
      <p>Joshua Richey is a user experience designer and front-end developer with > 12 years of experience researching, designing, and building websites & applications for humans.</p>
      <p>He has designed products for Pink Floyd, Skydance Entertainment, and the Grand Canyon Association, which he thinks is neat. He was the lead web designer at Idealist.org (an international jobs board for nonprofits) for ~5 years, where he spearheaded human-centered design efforts, built and maintained a scalable design system, and rewrote the front end using htlm5, postCSS, and react.</p>
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
