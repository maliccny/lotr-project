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
    // console.log(arrSlice[0])

    this.setState({
      pastLaunches: arrSlice
    })
  }

  render() {
    
    return (
      <>
        <h2>PastLaunches</h2>
        
        {this.state.pastLaunches.map(launch => 
          <div key={launch.name}>
            <img className="pastMissImg" src={launch.links.patch.small} alt="patch pic"></img>
            <h3>{launch.name}</h3>
            <span ><strong>Flight Number: </strong>{launch.flight_number}</span>
            <p><strong>Date: </strong>{launch.date_local}</p>
            <p>{launch.details}</p>
            <p>Launch Succesful: {launch.success.toString()}</p>
            <a href={launch.links.webcast} title="Youtube" target="_blank" rel="noopener noreferrer"><button>Watch Launch</button></a>
            <a href={launch.links.reddit.launch} title="Reddit" target="_blank" rel="noopener noreferrer"><button>Discuss Launch</button></a>
          </div>
          )}
      </>
    )
  }
}

export default PastLaunches