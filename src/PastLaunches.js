import React, { Component } from 'react'
import axios from "axios"

class PastLaunches extends Component {
  constructor() {
    super()

    this.state = {
      pastLaunches: []
    }
  }

  async componentDidMount() {
    const data = await axios('https://api.spacexdata.com/v4/launches/past') 
    const length = data.data.length
    const arrSlice = data.data.slice(length - 7, length -1).reverse()

    this.setState({
      pastLaunches: arrSlice
    })
  }

  render() {
    
    return (
      <div className="past-launch-info">
        {this.state.pastLaunches.map(launch => 
          <div className="past-launches" key={launch.name}>
            <img className="pastMissImg" src={launch.links.patch.small} alt="patch pic"></img>
            <div className="past-section-info">
              <h3>{launch.name}</h3>
              <span ><strong>Flight Number: </strong>{launch.flight_number}</span>
              <p><strong>Date: </strong>{launch.date_local}</p>
              <p>{launch.details}</p>
              <p>Launch Succesful: {launch.success.toString()}</p>
            </div>
            
            <div className="pastlaunch-buttons">
              <a href={launch.links.webcast} title="Youtube" target="_blank" rel="noopener noreferrer"><button className="Button Button1">Watch Launch</button></a>
              <a href={launch.links.reddit.launch} title="Reddit" target="_blank" rel="noopener noreferrer"><button className="Button Button1">Discuss Launch</button></a>
            </div>
            
          </div>
          )}
      </div>
    )
  }
}

export default PastLaunches