import React from 'react'

// styles
import './social-links.css'
//


export default () => {
  const links = [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/joshuarichey",
      class: "linkedin"
    },
    {
      title: "instagram",
      url: "https://instagram.com/joshrr",
      class: "instagram"
    },
    {
      title: "codepen",
      url: "https://codepen.io/joshuar",
      class: "codepen"
    },
    {
      title: "github",
      url: "https://github.com/joshuarrr",
      class: "github"
    }
  ]

  const linksList = links.map((link, i) =>
    <li key={ "link-" + i } className="social-link-item">
      <a
        className={ "social-link icon " + link.class }
        href={ link.url }
        rel="external"
        target="_blank"
      >
        <span className="social-link-text hidden-text">
          { link.title }
        </span>
      </a>
    </li>
  )

  return (
    <ul className="social-links">
      { linksList }
    </ul>
  )
}
