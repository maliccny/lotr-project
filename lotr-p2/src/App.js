import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './HomePage' // done working
import Spacex from './Spacex' // done working
import PastLaunches from './PastLaunches' //working
import Rockets from './Rockets' //done working
import AboutMe from './AboutMe' //done working
import Footer from './Footer' //working


class App extends Component {
  
  render() {
    return (
      <>
        <div className="header">
          <Link to="/">
            {/* <h3>Home</h3> */}
            <img className="spaceLogo" src="https://www.metri-tech.com/wp-content/uploads/2017/01/spacex-logo.jpg" alt="spaceX logo"></img>
          </Link>
          <div className="header-links">
            <Link to="/pastlaunches">
              <h3>Past Launches</h3>
            </Link>
            <Link to="/rockets">
              <h3>Rockets</h3>
            </Link>
            <Link to="/aboutspace">
              <h3>About SpaceX</h3>
            </Link>
            <Link to="/aboutme">
              <h3>About Me</h3>
            </Link>
          </div> 
        </div>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/aboutspace'>
          <Spacex />
        </Route>
        <Route path='/pastlaunches'>
          <PastLaunches />
        </Route>
        <Route path='/rockets'>
          <Rockets />
        </Route>
        <Route path='/aboutme'>
          <AboutMe />
        </Route>
        <Route path='/' >
          <Footer />
        </Route>
      </>
    )
  }
}

export default App