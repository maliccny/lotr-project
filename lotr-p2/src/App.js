import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './HomePage' // done working
import Spacex from './Spacex' // done working
import PastLaunches from './PastLaunches' //working
import Rockets from './Rockets' //working
import AboutMe from './AboutMe' //done working
import Footer from './Footer' //working


class App extends Component {
  
  render() {
    return (
      <>
        <div className="header">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/aboutspace">
            <h1>About SpaceX</h1>
          </Link>
          <Link to="/pastlaunches">
            <h1>Past Launches</h1>
          </Link>
          <Link to="/rockets">
            <h1>Rockets</h1>
          </Link>
          <Link to="/aboutme">
            <h1>About Me</h1>
          </Link>
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