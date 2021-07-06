import React from 'react'
import { withRouter } from 'react-router-dom'

function AboutMe() {
  return (
    <div className="outer-aboutme">
      <div className="aboutMe-info">
        <img className="aboutMe-img" src="https://maliccny.github.io/portfolio/images/profile.jpg" alt="Misbah's Pic"></img>
        <h2>About Me: </h2>
        <p className="aboutme-desc">Hi I am an aspiring web developer, who recently started learning HTML, CSS, and Javascript and React. I graduated City College of
        New York with a degree in Applied Mathematics, and have worked as a Data Analyst, creating Tableau dashboards. I have
        experience with using MySQL and PostgreSQL. I have some familiarity with using Python, from my days as an undergrad, and
        am currently learning Ruby on my own. I like watching Netflix shows and my hobbies include playing Basketball, and
        watching The Yankees play.</p>
        <ul className="contact-link-nav">
          <li><a href="https://github.com/maliccny" title="Misbah's Github" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://codepen.io/maliccny" title="Misbah's CodePen" target="_blank" rel="noopener noreferrer">CodePen</a></li>
          <li><a href="https://www.instagram.com/misbahali426/" title="Misbah's Instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}


export default withRouter(AboutMe)

