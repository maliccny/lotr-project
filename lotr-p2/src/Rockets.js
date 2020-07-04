import React, { Component } from 'react'
import axios from "axios"

class Rockets extends Component {
  constructor() {
    super()

    this.state = {
      rockets: []
    }
  }

  async componentDidMount() {
    const data = await axios('https://api.spacexdata.com/v4/rockets')
    // console.log(data)
    // console.log(data.data)
    // console.log(data.data[0])
    // console.log(data.data[0].name)
    // console.log(data.data[0].flickr_images)
    // console.log(data.data[0].flickr_images[0])
    // data.data.map(rocket => 
    //   console.log(rocket.name)
    // )
    // console.log(data.data[0].name)

    this.setState({
      rockets: data.data
    })
  }

  render() {
    return (
      <div className="outer-rockets-div">
        {this.state.rockets.map(rocket =>
          <div className="rockets-inner" key={rocket.name}>
            <img className="rocket-img" src={rocket.flickr_images[0]} alt="pic of rocket"></img>
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <h3>Overall Specs</h3>
            <ul>
              <li>Heigth: {rocket.height.meters}M</li>
              <li>Diameter: {rocket.mass.diameter}M</li>
              <li>Mass: {rocket.mass.kg} kg</li>
              <li>Boosters: {rocket.boosters}</li>
              <li>Cost Of Launch: ${rocket.cost_per_launch}</li>
              <li>Success Rate : {rocket.success_rate_pct} %</li>
              <li>First Flight: {rocket.first_flight}</li>
              <li>Stages: {rocket.stages}</li>
              <li>Payload To LEO: {rocket.payload_weights[0].lb} Lbs</li>
              <li>Active: {rocket.active.toString()}</li>
            </ul>
            <h3>Engine Specs</h3>
            <ul> 
              <li>Engines: {rocket.engines.number}</li>
              <li>Type: {rocket.engines.type}</li>
              <li>Version: {rocket.engines.version}</li>
              <li>Thrust: {rocket.first_stage.thrust_sea_level.lbf} Lbf</li>
              <li>Propellants: {rocket.engines.propellant_1}, {rocket.engines.propellant_2}</li>
            </ul>
            <a href={rocket.wikipedia} title="Wikipedia" target="_blank" rel="noopener noreferrer"><button>Read More</button></a>
          </div>
        )}

      </div>
    )
  }
}

export default Rockets