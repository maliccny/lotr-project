import React from 'react'
import { withRouter } from 'react-router-dom'

function AboutMe() {


  return (
    <>
      <div>
        <img src="https://i.imgur.com/Y8PIcM4.gif" alt="Misbah's Picture"></img>
        <h2>About Me: <button class="button">Button</button></h2>
        <p>Hi I am an aspiring web developer, who recently started learning HTML, CSS, and Javascript and React. I graduated City College of
        New York with a degree in Applied Mathematics, and have worked as a Data Analyst, creating Tableau dashboards. I have
        experience with using MySQL and PostgreSQL. I have some familiarity with using Python, from my days as an undergrad, and
        am currently learning Ruby on my own. I like watching Netflix shows and my hobbies include playing Basketball, and
        watching The Yankees play.</p>
        <ul className="contact-link-nav">
          <li><a href="https://github.com/maliccny" title="Misbah's Github" target="_blank">Github</a></li>
          <li><a href="https://codepen.io/maliccny" title="Misbah's CodePen" target="_blank">CodePen</a></li>
          <li><a href="https://www.instagram.com/misbahali426/" title="Misbah's Instagram" target="_blank">Instagram</a></li>
        </ul>
        <div className="contact-input">
          <h3>If you would like to contact me, please leave your email</h3>
          <input type="email" placeholder="Your email" required></input>
          <input type="submit"> 
        </div>
      </div>
    </>
  )
}


export default withRouter(AboutMe)