import React from 'react'
import { withRouter } from 'react-router-dom'

function Footer() {



  return (
    <div className="footer">
      <p className="created-using">Created Using</p>
      <div>
        <ul className="tech-list">
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              <img className="footer-img" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" alt="React Docs" />
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
              <img className="footer-img" src="https://www.netlify.com/img/press/logos/logomark-dark.png" alt="React Docs" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default withRouter(Footer)